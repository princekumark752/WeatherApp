import React, { useState } from 'react';
import { View, Button, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../store/weatherSlice';
import { RootState } from '../store/store';

const HomeScreen = ({ navigation }: any) => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { currentWeather, loading, error } = useSelector((state: RootState) => state.weather);

  const handleSearch = () => {
    if (!city) return;
    console.log('Searching weather for city:', city);
    dispatch(fetchWeather(city));
  };

  const handleForecast = () => {
    navigation.navigate('Forecast', { city });
  };

  return (
    <View>
      <SearchBar value={city} onChange={setCity} onSubmit={handleSearch} />
      <Button title="Search" onPress={handleSearch} />
      
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      
      {error && <Text style={{ color: 'red' }}>Error: {error}</Text>}
      
      {currentWeather && (
        <>
          <WeatherCard
            temp={currentWeather.main.temp}
            description={currentWeather.weather[0].description}
            humidity={currentWeather.main.humidity}
            windSpeed={currentWeather.wind.speed}
          />
          <Button title="View Forecast" onPress={handleForecast} />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
