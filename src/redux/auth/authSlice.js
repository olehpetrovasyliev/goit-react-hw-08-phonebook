const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  name: '',
  email: '',
  password: '',
};
const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
});
