import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Thunk to fetch weather based on user's current location
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (_, { rejectWithValue }) => {
    try {
      // Get user's current location
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;

      // Fetch weather data using latitude and longitude
      const response = await axios.get(
        `${WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch weather data';
      });
  },
});

export default weatherSlice.reducer;
