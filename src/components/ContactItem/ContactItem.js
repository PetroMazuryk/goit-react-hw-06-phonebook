import PropTypes from 'prop-types';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Button, Item, Text } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactItem = ({ contact, numbers }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  return (
    <Item>
      <Text>
        {numbers}. {name}
      </Text>
      <p>{number}</p>

      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
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
