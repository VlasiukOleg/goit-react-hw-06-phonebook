import { Contacts, ContactsItem, IconDelete } from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
  );

  return (
    <Contacts>
      {visibleContacts.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name} : {contact.number}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            <IconDelete />
          </button>
        </ContactsItem>
      ))}
    </Contacts>
  );
};
