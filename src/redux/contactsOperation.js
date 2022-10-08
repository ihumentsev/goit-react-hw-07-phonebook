import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../servises/API';

// First, create the thunk
export const getContacts = createAsyncThunk(
  'contacts/fetchStatus',
  async () => {
    const contacts = await API.fetchContacts();
    return contacts;
  }
);
