import { useSelector } from 'react-redux';

import ContactItem from './ContactItem';
import { selectFiteredContacts } from 'redux/selectors';

import s from '../ContactsComponents/ContactComponent.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFiteredContacts);
  if (!contacts.length) return <p>Not found contacts</p>;
  return (
    <ul className={s.list}>
      <h2>{contacts.length === 1 ? `Contact :` : `Contacts :`}</h2>
      {contacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
