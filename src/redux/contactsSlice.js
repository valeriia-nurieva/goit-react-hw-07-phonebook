import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const extraActions = [addContact, fetchContacts, deleteContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFullfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(getActions('pending'), handlePending)
      .addMatcher(getActions('rejected'), handleRejected)
      .addMatcher(getActions('fulfilled'), handleFullfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
