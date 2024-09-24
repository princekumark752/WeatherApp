import axios from 'axios';

const API_KEY = '7d0d73058e6b1a4876ba5d32da9cc363';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: { q: city, appid: API_KEY, units: 'metric' },
  });
  return response.data;
};

export const get5DayForecast = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: { q: city, appid: API_KEY, units: 'metric' },
  });
  return response.data;
};
