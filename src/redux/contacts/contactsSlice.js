import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitState } from './initState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        console.log(state);
        console.log(payload);
        return [...state, payload];
        // state.push(payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    delContact: {
      reducer(state, { payload }) {
        return state.contacts.contacts.filter(item => item.id !== payload.id);
        // const idx = state.findIndex(item => item.id === payload.id);
        // state.splice(idx, 1);
      },
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
