import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGet, apiAdd, apiDel } from '../../api/api';

export const getAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiGet();

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await apiAdd(userData);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const delContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await apiDel(id);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
