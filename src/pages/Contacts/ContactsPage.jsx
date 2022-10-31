import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactsForm from 'components/ContactsComponents/ContactsForm';
import ContactList from 'components/ContactsComponents/ContactsList';
import { selectContacts, selectNameAuth } from 'redux/selectors';
import { getContactsThunk } from 'redux/contacts/thunk.contacts';
import Filter from 'components/Filter/Filter';

import s from '../Contacts/ContactsPage.module.css';
import { getInfoUserThunk } from 'redux/auth/thunk.auth';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const name = useSelector(selectNameAuth);

  useEffect(() => {
    dispatch(getContactsThunk());

    if (!name.length) {
      dispatch(getInfoUserThunk());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.contacts__container}>
      <h1>Phonebook :</h1>
      <ContactsForm />

      {!!contacts.length && (
        <>
          {contacts.length > 1 && <Filter />}
          <ContactList />
        </>
      )}
    </div>
  );
};

export default ContactsPage;
