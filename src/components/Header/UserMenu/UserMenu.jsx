import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';

import { logOutUserThunk } from 'redux/auth/thunk.auth';

import { selectNameAuth } from 'redux/selectors';

import s from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectNameAuth);

  return (
    <div className={s.user__Block}>
      <h2 className={s.user__Title}>
        Hallo, <span>{name} !</span>
      </h2>
      <Button
        // focusVisibleClassName={s.focus_Button}
        onClick={() => dispatch(logOutUserThunk())}
        type="submit"
        variant="contained"
        sx={{
          height: 45,
          width: 100,
          marginTop: 1,
          bgcolor: '#dbcdcc',
          color: '#1976d1',
          '&:hover': {
            bgcolor: '#4391ce',
            color: '#dbcdcc',
          },
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
