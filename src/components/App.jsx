import { useEffect, useState } from 'react';
import initialContacts from '../initialContacts.json';

import { Section } from 'components/Section/Section';
import { PhonebookForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhoneTitle } from './PhoneTitle/PhoneTitle';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return initialContacts;
};
export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const handleFilterChange = event => {
    const { value } = event.currentTarget;

    setFilter(value);
  };

  const getFilteredContacts = () => {
    const normalizedValue = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };

  const clearFilterField = () => {
    setFilter('');
  };

  return (
    <>
      <PhoneTitle name="PhoneBook 6"></PhoneTitle>
      <Section title="Add new contacts">
        <PhonebookForm
          contacts={contacts}
          addContact={addContact}
        ></PhonebookForm>
      </Section>

      <Section title="Filter contacts">
        <Filter
          onChange={handleFilterChange}
          value={filter}
          onClick={clearFilterField}
        ></Filter>
      </Section>

      <Section title="Contact List">
        {contacts.length ? (
          <ContactList
            contactList={getFilteredContacts()}
            onDelete={deleteContact}
          ></ContactList>
        ) : (
          <h2 style={{ textAlign: 'center' }}>There is no added contacts</h2>
        )}
      </Section>
    </>
  );
};
