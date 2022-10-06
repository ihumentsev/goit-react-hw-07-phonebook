import { createSlice } from '@reduxjs/toolkit';
const initialcontacts = [];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialcontacts,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;
export default contactsSlice.reducer;
