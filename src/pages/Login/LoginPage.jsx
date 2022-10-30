import TextField from '@mui/material/TextField';
// import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getInfoUserThunk, loginUserThunk } from 'redux/auth/thunk.auth';

import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';

import s from '../Login/LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    dispatch(loginUserThunk({ email, password }));
    dispatch(getInfoUserThunk());

    setEmail('');
    setPassword('');
  };

  return (
    <form
      onSubmit={handleChange}
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
      }}
    >
      <TextField
        className={s.text__Field}
        onChange={e => setEmail(e.target.value)}
        required
        id="Email-required"
        label="Email"
        margin="dense"
        autoComplete="username"
        type="email"
        name="email"
        value={email}
        InputProps={{
          startAdornment: <EmailIcon position="start" color="action" />,
        }}
      />
      <TextField
        onChange={e => setPassword(e.target.value)}
        required
        id="password-required"
        label="Password"
        margin="dense"
        autoComplete="current-password"
        type="password"
        name="password"
        value={password}
        InputProps={{
          startAdornment: <KeyIcon position="start" color="action" />,
        }}
      />

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

export default LoginPage;
