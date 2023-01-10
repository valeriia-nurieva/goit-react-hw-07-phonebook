import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  isLoading: false,
  error: null,
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    removeContacts(state, action) {
      return state = state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, removeContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
