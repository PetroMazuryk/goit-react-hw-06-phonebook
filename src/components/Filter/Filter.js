import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper, FilterInput, Button } from './Filter.styled';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(filterContacts(value));
  };

  const clearFilter = () => {
    dispatch(filterContacts(''));
  };
  return (
    <>
      <FilterWrapper>
        <label htmlFor="filter">
          <FilterInput
            type="text"
            id="filter"
            name="filter"
            placeholder="Enter to search..."
            value={filter}
            onChange={handleFilterChange}
          />
        </label>

        <Button type="button" onClick={clearFilter}>
          Clear
        </Button>
      </FilterWrapper>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};
