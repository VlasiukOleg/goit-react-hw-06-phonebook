import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  const onAddContact = newContact => {
    setContacts(contacts => [...contacts, newContact]);
  };

  const onDeleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Section title="PhoneBook">
      <ContactForm onAddContact={onAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <ContactFilter filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </Section>
  );
};
