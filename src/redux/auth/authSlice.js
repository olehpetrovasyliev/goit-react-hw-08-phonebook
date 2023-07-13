import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './authOperatoins';

const initialState = {
  user: { name: '', email: '', password: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.user.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = { name: '', email: '', password: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isRefreshing = true;
          state.isRefreshing = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isRefreshing = false;
          state.error = payload;
        }
      );
  },
});
export const authReducer = authSlice.reducer;
