import { createSlice } from '@reduxjs/toolkit';
import {
  createNewUserThunk,
  getInfoUserThunk,
  loginUserThunk,
  logOutUserThunk,
} from './thunk.auth';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [createNewUserThunk.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    [loginUserThunk.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    [getInfoUserThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
    },

    [logOutUserThunk.fulfilled]: (state, action) => {
      state.user = { name: '', email: '' };
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;
