import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
