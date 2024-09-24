import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherByCity, get5DayForecast } from '../api/api';

interface WeatherState {
  currentWeather: any;
  forecast: any[];
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  currentWeather: null,
  forecast: [],
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city: string, { rejectWithValue }) => {
  try {
    const response = await getWeatherByCity(city);
    return response;
  } catch (error) {
    console.error('Failed to fetch weather:', error);
    return rejectWithValue(error.message || 'Failed to fetch weather');
  }
});

export const fetchForecast = createAsyncThunk('weather/fetchForecast', async (city: string, { rejectWithValue }) => {
  try {
    const response = await get5DayForecast(city);
    return response;
  } catch (error) {
    console.error('Failed to fetch forecast:', error);
    return rejectWithValue(error.message || 'Failed to fetch forecast');
  }
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.currentWeather = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload.list;
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;
