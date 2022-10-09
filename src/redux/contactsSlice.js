import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, removeContacts } from './contactsOperation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
    upDate: false,
  },
  reducers: {
    // add(state, action) {
    //   state.contacts.push(action.payload);
    // },
    // remove(state, action) {
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
    filter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContacts.pending]: (state, action) => {
      state.isLoading = true;
      state.upDate = false;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.upDate = true;
      // console.log(action.payload);
      // state.contacts.push(action.payload);
    },
    [addContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.upDate = false;
      state.error = action.payload;
    },
    [removeContacts.pending]: state => {
      state.isLoading = true;
    },
    [removeContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    [removeContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { add, remove, filter } = contactsSlice.actions;
export default contactsSlice.reducer;
