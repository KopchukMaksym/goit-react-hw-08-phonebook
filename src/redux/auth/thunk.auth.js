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

export const createNewUserThunk = createAsyncThunk(createNewUser, user => {
  return createNewUserService(user);
});

export const loginUserThunk = createAsyncThunk(loginUser, login => {
  return loginUserService(login);
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
