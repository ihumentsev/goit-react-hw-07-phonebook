import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../servises/API';

// First, create the thunk
export const getContacts = createAsyncThunk(
  'contacts/fetchStatus',
  async () => {
    const contacts = await API.getContacts();
    return contacts;
  }
);
export const addContacts = createAsyncThunk(
  'contacts/addStatus',
  async (data, thunkApi) => {
    try {
      const contacts = await API.addContacts(data);
      console.log(data);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/removeStatus',
  async (id, { rejectWithValue }) => {
    try {
      const idResponse = await API.removeContacts(id);
      return idResponse;
    } catch (error) {
      console.log(rejectWithValue(error.message));
      //   return rejectWithValue(error.message);
    }
  }
);
