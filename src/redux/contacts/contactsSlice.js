import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunk.contacts';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContactsThunk.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },

    [addContactsThunk.fulfilled]: (state, action) => {
      state.unshift(action.payload);
    },

    [deleteContactsThunk.fulfilled]: (state, action) => {
      const index = state.findIndex(
        contact => contact.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
