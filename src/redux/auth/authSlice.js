import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './authOperatoins';

const initialState = {
  user: { name: '', email: '', password: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: '',
  loading: false,
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
        state.loading = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = { name: '', email: '', password: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload;
        state.isRefreshing = false;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(refresh.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});
export const authReducer = authSlice.reducer;
