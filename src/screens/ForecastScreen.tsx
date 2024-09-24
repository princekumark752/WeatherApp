import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../store/weatherSlice';
import { RootState } from '../store/store';

const ForecastScreen = ({ route }: any) => {
  const { city } = route.params;
  const dispatch = useDispatch();
  const { forecast, loading, error } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    dispatch(fetchForecast(city));
  }, [city]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ea" />
        <Text style={styles.loadingText}>Loading forecast...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error fetching forecast: {error}</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.forecastItem}>
      <Text style={styles.dateText}>{item.dt_txt.split(' ')[0]}</Text>
      <Text style={styles.tempText}>{`Temp: ${item.main.temp_min}°C - ${item.main.temp_max}°C`}</Text>
      <Text style={styles.conditionText}>{`Condition: ${item.weather[0].description}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
           <Text style={styles.cityName}>{city}</Text>
      <FlatList
        data={forecast}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  list: {
    paddingBottom: 20,
  },
  forecastItem: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tempText: {
    fontSize: 16,
  },
  conditionText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ForecastScreen;
