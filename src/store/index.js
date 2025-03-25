import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import todoReducer from './slices/todoSlice';
import weatherReducer from './slices/weatherSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
    weather: weatherReducer,
  },
});

export default store;