import { createAsyncThunk } from '@reduxjs/toolkit';

import { addContact, deleteContact, getContacts } from './contactsActions';
import {
  addContactService,
  deleteContactService,
  getContactService,
} from './contactService';
import { token } from 'api';

export const getContactsThunk = createAsyncThunk(getContacts, (_, thunkApi) => {
  const state = thunkApi.getState();
  const curentToken = state.auth.token;
  token.set(curentToken);
  return getContactService();
});

export const addContactsThunk = createAsyncThunk(addContact, contact => {
  return addContactService(contact);
});

export const deleteContactsThunk = createAsyncThunk(deleteContact, id => {
  return deleteContactService(id);
});
