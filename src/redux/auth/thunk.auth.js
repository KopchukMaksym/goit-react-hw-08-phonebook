import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewUser,
  getInfoUser,
  loginUser,
  logOutUser,
} from './authActions';
import {
  createNewUserService,
  getInfoUserService,
  loginUserService,
  logOutUserService,
} from './authService';
import { token } from 'api';

export const createNewUserThunk = createAsyncThunk(createNewUser, user => {
  return createNewUserService(user);
});

export const loginUserThunk = createAsyncThunk(loginUser, async login => {
  const data = await loginUserService(login);
  token.set(data.token);
  return data;
});

export const getInfoUserThunk = createAsyncThunk(getInfoUser, (_, thunkApi) => {
  const state = thunkApi.getState();
  const token = state.auth.token;
  if (token === null) {
    return thunkApi.rejectWithValue();
  } else {
    return getInfoUserService();
  }
});

export const logOutUserThunk = createAsyncThunk(logOutUser, (_, thunkApi) => {
  const state = thunkApi.getState();
  const token = state.auth.token;
  if (token === null) {
    return thunkApi.rejectWithValue();
  } else {
    return logOutUserService();
  }
});
