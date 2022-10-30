import { createAction } from '@reduxjs/toolkit';

export const getContacts = createAction('contacts/getContacts');
export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
