import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  clearToken,
  currentUserAPI,
  logInAPI,
  logOutAPI,
  setToken,
  signUpAPI,
} from 'api/api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await signUpAPI(credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await logInAPI(credentials);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await logOutAPI(credentials);
      clearToken();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const persistedToken = getState().auth.token;

    if (!persistedToken) {
      return rejectWithValue('enable to fetch user!!!');
    }
    try {
      setToken(persistedToken);
      const { data } = await currentUserAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
