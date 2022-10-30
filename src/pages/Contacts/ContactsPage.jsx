import { getInfoUserThunk } from 'redux/auth/thunk.auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactsForm from 'components/ContactsComponents/ContactsForm';
import ContactList from 'components/ContactsComponents/ContactsList';
import { selectContacts, selectTokenAuth } from 'redux/selectors';
import { token } from 'api';
import { getContactsThunk } from 'redux/contacts/thunk.contacts';
import Filter from 'components/Filter/Filter';

import s from '../Contacts/ContactsPage.module.css';

const ContactsPage = () => {
  const currentToken = useSelector(selectTokenAuth);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    token.set(currentToken);
    dispatch(getContactsThunk());
    dispatch(getInfoUserThunk());
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
