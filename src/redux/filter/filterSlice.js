import { createSlice } from '@reduxjs/toolkit';
import { filterInitState } from '../contacts/initState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    filterContact: {
      reducer(state, { payload }) {
        // console.log(payload);
        return state.filter(item =>
          item.name.toLowerCase().includes(payload.name.trim())
        );
      },
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
