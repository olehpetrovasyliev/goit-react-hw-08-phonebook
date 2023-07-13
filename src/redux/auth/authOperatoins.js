import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, logInAPI, logOutAPI, setToken, signUpAPI } from 'api/api';
import axios from 'axios';

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
// export cons
