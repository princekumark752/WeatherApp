# Weather Forecast App

## Description

This Weather Forecast App is a mobile application built using React Native. It allows users to search for a city and view the current weather conditions along with a 5-day forecast. The app integrates with the OpenWeatherMap API and uses Redux for state management and TypeScript for type safety.

### Features:
- Search weather by city name.
- Displays current weather conditions (temperature, humidity, wind speed, and weather description).
- 5-day weather forecast with daily temperature highs and lows.
- Navigation between different views using React Navigation.
- Unit tests written with Jest and React Native Testing Library.
- Caching weather data for performance optimization.

---

## Project Structure

The folder structure of this project is as follows:

WeatherApp/ ├── __MACOSX/ # Auto-generated folder for Mac, can be ignored ├── tests/ # Contains unit tests ├── android/ # Android-specific files ├── ios/ # iOS-specific files ├── node_modules/ # Project dependencies ├── src/ # Source code (components, services, redux, etc.) │ ├── components/ # Reusable UI components │ ├── screens/ # Application screens (HomeScreen, WeatherDetails) │ ├── services/ # API calls (weatherService.ts) │ ├── store/ # Redux store and weather slice (weatherSlice.ts) ├── .gitignore # Specifies files ignored by git ├── app.json # Application configuration ├── App.tsx # Main application entry point ├── babel.config.js # Babel configuration for React Native ├── Gemfile # Ruby gem dependencies for iOS ├── Gemfile.lock # Lockfile for Ruby gem dependencies ├── index.js # App entry point for bundling ├── jest.config.js # Jest configuration for unit tests ├── metro.config.js # Metro bundler configuration ├── package-lock.json # Lockfile for npm dependencies ├── package.json # Project dependencies and scripts ├── README.md # Project documentation ├── tsconfig.json # TypeScript configuration


---

## Installation

### Prerequisites
- Ensure you have Node.js installed (https://nodejs.org/en/)
- Install `react-native-cli`:
   ```bash
   npm install -g react-native-cli
git clone https://github.com/your-username/weather-forecast-app.git
cd weather-forecast-app
npm install
npx react-native run-android
npx react-native run-ios
