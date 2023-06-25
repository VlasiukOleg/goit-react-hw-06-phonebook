import { FilterInput } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';

import { changeFilter } from 'redux/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <FilterInput>
      <span>Find contacts by name</span>

      <input
        type="text"
        name="filter"
        // value={filter}
        onChange={onChangeFilter}
      />
    </FilterInput>
  );
};
