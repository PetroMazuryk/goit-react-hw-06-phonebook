import PropTypes from 'prop-types';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Button, Item, Text } from './ContactItem.styled';

export const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <Item>
      <Text>{name}</Text>
      <p>{number}</p>

      <Button type="button" onClick={() => onDelete(id)}>
        <RiDeleteBin5Fill />
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
};
