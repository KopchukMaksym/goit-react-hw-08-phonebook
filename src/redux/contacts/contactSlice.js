import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunk.contacts';

const initialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContactsThunk.pending]: state => {
      state.isLoading = true;
    },
    [getContactsThunk.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getContactsThunk.rejected]: state => {
      state.error = alert('error');
    },

    [addContactsThunk.pending]: state => {
      state.isLoading = true;
    },
    [addContactsThunk.fulfilled]: (state, action) => {
      const isExist = state.items.filter(el => action.payload.name === el.name);
      if (!!isExist.length) {
        alert(`${action.payload.name} is already in contacts`);
      } else {
        state.items.unshift(action.payload);
        state.isLoading = false;
      }
    },
    [addContactsThunk.rejected]: state => {
      state.error = alert('error');
    },

    [deleteContactsThunk.pending]: state => {
      state.isLoading = true;
    },
    [deleteContactsThunk.fulfilled]: (state, action) => {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.isLoading = false;
    },
    [deleteContactsThunk.rejected]: state => {
      state.error = alert('error');
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { deleteContact, addContact } = contactsSlice.actions;
