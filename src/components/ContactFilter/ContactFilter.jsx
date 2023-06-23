import PropTypes from 'prop-types';
import { FilterInput } from './ContactFilter.styled';

export const ContactFilter = ({ filter, onChangeFilter }) => {
  return (
    <FilterInput>
      <span>Find contacts by name</span>

      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </FilterInput>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
