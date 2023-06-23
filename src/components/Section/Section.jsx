import { PhoneBookSection, PhoneBookTitle } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <PhoneBookSection>
      <PhoneBookTitle>{title}</PhoneBookTitle>
      {children}
    </PhoneBookSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
