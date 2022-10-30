import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectNameAuth = state => state.auth.user.name;
export const selectEmailAuth = state => state.auth.user.email;
export const selectPasswordAuth = state => state.auth.password;
export const selectTokenAuth = state => state.auth.token;

export const selectFiteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
