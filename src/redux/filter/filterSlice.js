import { createSlice } from '@reduxjs/toolkit';
import { filterInitState } from '../contacts/initState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    filterContact(state, { payload }) {
      console.log(payload);
      return { ...state, filter: payload };
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
