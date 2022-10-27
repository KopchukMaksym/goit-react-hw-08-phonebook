import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsActions';
import {
  addContactService,
  deleteContactService,
  getContactService,
} from './contactService';

export const getContactsThunk = createAsyncThunk(fetchContacts, () => {
  return getContactService();
});

export const addContactsThunk = createAsyncThunk(addContact, contact => {
  return addContactService(contact);
});

export const deleteContactsThunk = createAsyncThunk(deleteContact, id => {
  return deleteContactService(id);
});
