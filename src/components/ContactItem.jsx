import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from 'redux/contacts/thunk.contacts';
import s from './FormStyles.module.css';

const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <p>
        {name} : {phone}
      </p>
      <button
        className={s.btnDelete}
        onClick={() => dispatch(deleteContactsThunk(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
