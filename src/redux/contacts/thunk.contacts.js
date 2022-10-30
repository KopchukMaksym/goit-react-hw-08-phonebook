import { createAsyncThunk } from '@reduxjs/toolkit';

import { addContact, deleteContact, getContacts } from './contactsActions';
import {
  addContactService,
  deleteContactService,
  getContactService,
} from './contactService';

export const getContactsThunk = createAsyncThunk(getContacts, (_, thunkApi) => {
  const state = thunkApi.getState();
  const token = state.auth.token;
  if (token === null) {
    return thunkApi.rejectWithValue();
  } else {
    return getContactService();
  }
});

export const addContactsThunk = createAsyncThunk(addContact, contact => {
  return addContactService(contact);
});

export const deleteContactsThunk = createAsyncThunk(deleteContact, id => {
  return deleteContactService(id);
});
