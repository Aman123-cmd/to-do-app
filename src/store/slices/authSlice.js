import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      localStorage.removeItem('user');
    },
    checkAuth: (state) => {
      const user = localStorage.getItem('user');
      if (user) {
        state.isAuthenticated = true;
        state.user = JSON.parse(user);
      }
    },
  },
});

export const { loginSuccess, loginFailure, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;

// Thunk for handling login
export const login = (credentials) => async (dispatch) => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (credentials.username === 'demo' && credentials.password === 'password') {
      dispatch(loginSuccess({ username: credentials.username }));
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};