import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputCity, setInputCity] = useState('');

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=0&longitude=0&current_weather=true&temperature_unit=celsius`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();

      setWeather({
        city: cityName,
        temperature: data.current_weather.temperature,
        windSpeed: data.current_weather.windspeed,
        weatherCode: data.current_weather.weathercode,
        time: new Date(data.current_weather.time).toLocaleString(),
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity);
      fetchWeather(inputCity);
      setInputCity('');
    }
  };

  const getWeatherDescription = (code) => {
    const weatherCodes = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      71: 'Slight snow',
      73: 'Moderate snow',
      75: 'Heavy snow',
      77: 'Snow grains',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      85: 'Slight snow showers',
      86: 'Heavy snow showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail',
    };
    return weatherCodes[code] || 'Unknown';
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter city name..."
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          className="city-input"
        />
        <button type="submit" className="search-button">
          Get Weather
        </button>
      </form>

      {loading && <div className="loading">Loading weather data...</div>}

      {error && <div className="error">Error: {error}</div>}

      {weather && !loading && (
        <div className="weather-card">
          <h2 className="city-name">{weather.city}</h2>
          <div className="weather-info">
            <div className="temperature">
              <span className="temp-value">{Math.round(weather.temperature)}</span>
              <span className="temp-unit">°C</span>
            </div>
            <div className="weather-details">
              <p className="weather-description">
                {getWeatherDescription(weather.weatherCode)}
              </p>
              <p className="wind-speed">
                Wind Speed: {weather.windSpeed} km/h
              </p>
              <p className="update-time">
                Last Updated: {weather.time}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
