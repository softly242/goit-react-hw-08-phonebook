import { createAsyncThunk } from '@reduxjs/toolkit';
import * as APIcontacts from './APIcontacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await APIcontacts.fetchContacts(token);
      return data;
    } catch ({ message, name, code }) {
      return rejectWithValue({ message, name, code });
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await APIcontacts.addContacts(item);
      return data;
    } catch ({ message, name, code }) {
      return rejectWithValue({ message, name, code });
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await APIcontacts.deleteContacts(id);
      console.log(data)
      return data;
    } catch ({ message, name, code }) {
      return rejectWithValue({ message, name, code });
    }
  }
);
