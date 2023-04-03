import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from 'data/initialContacts';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts.items,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
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
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
// console.log(contactsSlice);
export const { addContact, deleteContact } = contactsSlice.actions;
