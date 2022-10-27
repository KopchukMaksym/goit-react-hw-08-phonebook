import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { getContactsThunk } from 'redux/contacts/thunk.contacts';
import { ContactForm } from './ContactForm';

import ContactList from './ContactList';
import Filter from './Filter';

import s from './FormStyles.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={s.section}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {!!contacts.length && <ContactList />}
    </div>
  );
};
