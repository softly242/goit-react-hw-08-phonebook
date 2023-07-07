import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './contactsOperation';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false;
      state.error = null;
    },

    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log('Error', Object.assign({}, payload))
      state.error = payload;
    },

    [addContacts.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [addContacts.fulfilled]: (state, { payload }) => {
      state.contacts.push(payload);
      state.isLoading = false;
      state.error = null;
      return;
    },

    [addContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteContacts.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.splice(state.contacts.findIndex(el => el.id !== payload.id), 1);
    },

    [deleteContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
