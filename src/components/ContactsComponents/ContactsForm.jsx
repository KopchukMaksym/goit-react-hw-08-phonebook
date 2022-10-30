import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AbcIcon from '@mui/icons-material/Abc';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import { addContactsThunk } from 'redux/contacts/thunk.contacts';
import { selectContacts } from 'redux/selectors';

import { schemaContactForm } from 'validation/schemaContactForm';

import s from '../ContactsComponents/ContactComponent.module.css';

const initialState = {
  name: '',
  number: '',
};

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: schemaContactForm,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: values => checkExistingContacts(values),
  });

  const { values, handleSubmit, handleChange, errors, resetForm } = formik;

  const checkExistingContacts = values => {
    const isExist = contacts.filter(el => values.name === el.name);
    if (!!isExist.length) {
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(addContactsThunk(values));
      resetForm();
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        required
        id="outlined-required"
        label="Name"
        margin="dense"
        type="text"
        name="name"
        value={values.name}
        InputProps={{
          startAdornment: <AbcIcon position="start" color="action" />,
        }}
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      <TextField
        onChange={handleChange}
        required
        id="outlined-required"
        label="Number"
        margin="dense"
        type="tel"
        name="number"
        value={values.number}
        InputProps={{
          startAdornment: <AddIcCallIcon position="start" color="action" />,
        }}
      />
      {errors.number && <p style={{ color: 'red' }}>{errors.number}</p>}
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: 200,
          marginTop: 1,
        }}
      >
        Send
      </Button>
    </form>
  );
};

export default ContactsForm;
