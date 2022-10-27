import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';

export const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
