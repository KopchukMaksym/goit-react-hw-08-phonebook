import { useDispatch } from 'react-redux';

import { deleteContactsThunk } from 'redux/contacts/thunk.contacts';

import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';
import { stringAvatar } from 'utils/stringAvatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import s from '../ContactsComponents/ContactComponent.module.css';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.itemName}>
        <Avatar {...stringAvatar(name)} />
        <p className={s.name}>
          {name} : {number}
        </p>
      </div>
      <button
        className={s.btnDelete}
        onClick={() => dispatch(deleteContactsThunk(id))}
        type="button"
      >
        <DeleteForeverIcon
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: '#1765c0',
            },
          }}
        />
      </button>
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
