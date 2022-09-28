export const contactsInitState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const filterInitState = {
  filter: '',
};

// _________________________________________________________________

// export const contactsReducer = createReducer(contactsInitState, {
//   [addContact]: (state, { payload }) => {
//     console.log(payload);
//     return [...state, payload];
//     // state.push(payload);
//   },
//   [delContact]: (state, { payload }) => {
//     return state.filter(item => item.id !== payload.id);
//     // const idx = state.findIndex(item => item.id === payload.id);
//     // state.splice(idx, 1);
//   },
// });

// export const filterReducer = createReducer(filterInitState, {
//   [filterContact]: (state, { payload }) => {
//     // console.log(payload);
//     return state.filter(item => item.name.toLowerCase().includes(payload.name));
//   },
// });
