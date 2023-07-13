import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './contacts/slice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: authReducer,
  },
});
