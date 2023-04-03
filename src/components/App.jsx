import { Section } from 'components/Section/Section';
import { PhonebookForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhoneTitle } from './PhoneTitle/PhoneTitle';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <PhoneTitle name="PhoneBook 6"></PhoneTitle>
      <Section title="Add new contacts">
        <PhonebookForm />
      </Section>

      <Section title="Filter contacts">
        <Filter />
      </Section>

      <Section title="Contact List">
        {contacts.length ? (
          <ContactList />
        ) : (
          <h2 style={{ textAlign: 'center' }}>There is no added contacts</h2>
        )}
      </Section>
    </>
  );
};
