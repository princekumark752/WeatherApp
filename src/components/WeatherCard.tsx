import React, { FC } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

interface Props {
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

const WeatherCard: FC<Props> = ({ temp, description, humidity, windSpeed }) => {
  const scaleValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
      <Text style={styles.tempText}>{`Temperature: ${temp}°C`}</Text>
      <Text style={styles.descriptionText}>{`Description: ${description}`}</Text>
      <Text style={styles.detailText}>{`Humidity: ${humidity}%`}</Text>
      <Text style={styles.detailText}>{`Wind Speed: ${windSpeed} m/s`}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  tempText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 16,
    marginVertical: 5,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
  },
});

export default WeatherCard;
