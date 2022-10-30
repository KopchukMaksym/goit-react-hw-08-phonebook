import { useDispatch, useSelector } from 'react-redux';

import { filterContact } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';

import { TextField } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  return (
    <>
      <h3>Find contacts by name</h3>

      <TextField
        onChange={({ target: { value } }) => dispatch(filterContact(value))}
        required
        label="Search"
        type="search"
        name="search"
        value={filter}
        InputProps={{
          startAdornment: <ManageSearchIcon position="start" color="action" />,
        }}
        sx={{
          width: 350,
          marginTop: 1,
        }}
      />
    </>
  );
};
export default Filter;
