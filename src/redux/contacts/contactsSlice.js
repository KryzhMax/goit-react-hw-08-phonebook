import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      console.log(payload);
      // return [...state, payload];
      state.push(payload);
    },

    delContact(state, { payload }) {
      // console.log();
      // return state.contacts.filter(item => item.id !== payload);
      const idx = state.findIndex(item => item.id === payload);
      state.splice(idx, 1);
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
