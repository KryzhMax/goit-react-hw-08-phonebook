import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitState } from './initState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContact(state, { payload }) {
      console.log(payload);
      // return [...state, payload];
      state.contacts.push(payload);
    },

    delContact(state, { payload }) {
      // console.log();
      // return state.contacts.filter(item => item.id !== payload);
      const idx = state.contacts.findIndex(item => item.id === payload);
      state.contacts.splice(idx, 1);
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
