import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactFilter = getFilteredContacts();

  return (
    <List>
      <TransitionGroup>
        {contactFilter.map((contact, index) => (
          <CSSTransition key={contact.id} timeout={500} classNames="contact">
            <ContactItem numbers={index + 1} contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </List>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
