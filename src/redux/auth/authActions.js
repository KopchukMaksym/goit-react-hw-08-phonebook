import { createAction } from '@reduxjs/toolkit';

export const createNewUser = createAction('auth/createNewUser');
export const loginUser = createAction('auth/loginUser');
export const getInfoUser = createAction('auth/getInfoUser');
export const logOutUser = createAction('auth/logOutUser');
