import shortid from 'shortid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { PhoneBookForm, AddButton, Message } from './ContactForm.styled';

import { useForm } from 'react-hook-form';

export const ContactForm = ({ contacts, onAddContact }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    for (const contact of contacts) {
      if (contact.name === data.name) {
        Notify.warning(`${contact.name} is already in contact`);
        reset();
        return;
      }
    }

    onAddContact({
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    });
    reset();
  };

  return (
    <PhoneBookForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          {...register('name', {
            required: true,
            pattern:
              /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/i,
          })}
        />
        {errors.name && (
          <Message>
            Name may contain only letters, apostrophe, dash and spaces.
          </Message>
        )}
      </label>

      <label>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          {...register('number', {
            required: true,
            pattern:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i,
          })}
        />
        {errors.number && (
          <Message>
            Phone number must be digits and can contain spaces, dashes,
            parentheses and can start with +
          </Message>
        )}
      </label>

      <AddButton type="submit">Add contact</AddButton>
    </PhoneBookForm>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onAddContact: PropTypes.func,
};
