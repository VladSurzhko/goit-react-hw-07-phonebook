import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteUser(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { deleteUser, addUser } = contactSlice.actions;
export const selectContacts = (state) => state.contacts;
export const selectFilter = (state) => state.filter;
export const contactsReducer = contactSlice.reducer;




// const contactsState = {
//     items: []
// }

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: contactsState,
//     reducers: {
//       add(state, action) {
//         const doubleContact =
//           state.items.findIndex(contact => contact.name === action.payload.name) === -1;
  
//         if (doubleContact) {
//           state.items.push(action.payload); // додавання нового контакту
//         } else {
//           alert(`${action.payload.name} is already in contacts.`);
//         }
//       },
//       remove(state, action) {
//         // визначення індексу контакту у переліку контактів
//         const idxContact = state.items.findIndex(
//           contact => contact.id === action.payload
//         );
//         state.items.splice(idxContact, 1); // видалення контакту по id
//       },
//     },
//   });
  
// export default contactsSlice

//   export const { add, remove } = contactsSlice.actions;