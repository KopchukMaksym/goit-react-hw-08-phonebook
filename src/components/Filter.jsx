import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';

import s from './FormStyles.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        className={s.inputFilter}
        onChange={({ target: { value } }) => dispatch(filterContact(value))}
        type="text"
        value={filter}
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Filter may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
