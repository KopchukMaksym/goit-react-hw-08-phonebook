import TextField from '@mui/material/TextField';
// import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { createNewUserThunk } from 'redux/auth/thunk.auth';
import { useDispatch } from 'react-redux';

// import { Box, InputAdornment } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(name, email, password);
  // }, [name, email, password]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createNewUserThunk({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
      }}
    >
      <TextField
        onChange={e => setName(e.target.value)}
        required
        id="name-required"
        label="Name"
        margin="dense"
        type="text"
        name="name"
        value={name}
        InputProps={{
          startAdornment: <PersonAddIcon position="start" color="action" />,
        }}
      />
      <TextField
        onChange={e => setEmail(e.target.value)}
        required
        id="email-required"
        label="Email"
        margin="dense"
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

export default RegisterPage;
