import PropTypes from 'prop-types';
import { PhoneName } from './PhoneTitle.styled';

export const PhoneTitle = ({ name }) => {
  return <PhoneName>{name}</PhoneName>;
};

PhoneTitle.propTypes = {
  name: PropTypes.string,
};
