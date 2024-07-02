// src/components/WeatherPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './WeatherPage.css'; // Ensure you create corresponding CSS file

const WeatherPage = () => {
    const [destination, setDestination] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState('');

    const getWeather = async () => {
        const apiKey = '807c35da3d30d9bf6dbf47b057d42051';
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${apiKey}&units=metric`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${destination}&appid=${apiKey}&units=metric`;

        try {
            const weatherResponse = await axios.get(weatherUrl);
            setWeather(weatherResponse.data);

            const forecastResponse = await axios.get(forecastUrl);
            setForecast(forecastResponse.data);
            setError('');
        } catch (error) {
            setError('Failed to fetch weather data. Please try again.');
            setWeather(null);
            setForecast(null);
        }
    };

    return (
        <div className="weather-container">
            <video autoPlay loop muted id="background-video">
                <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0485/large_preview/_import_61a86730e71bc7.62435435.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter destination"
                />
                <button onClick={getWeather}>Get Weather</button>
                {error && <p className="error">{error}</p>}
                {weather && (
                    <div id="current-weather" className="card">
                        <h3>Current Weather in {weather.name}</h3>
                        <p>Temperature: {weather.main.temp} °C</p>
                        <p>Weather: {weather.weather[0].description}</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Wind Speed: {weather.wind.speed} m/s</p>
                    </div>
                )}
                {forecast && (
                    <div id="forecast">
                        <h3>Forecast</h3>
                        <div className="forecast-container">
                            {forecast.list.slice(0, 5).map((item, index) => (
                                <div key={index} className="forecast-item card">
                                    <p>{new Date(item.dt_txt).toLocaleString()}</p>
                                    <p>Temperature: {item.main.temp} °C</p>
                                    <p>Weather: {item.weather[0].description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div id="weather-tips" className="card">
                    <h3>Travel Tips</h3>
                    <p>Check the weather forecast before your trip.</p>
                    <p>Pack appropriate clothing for the weather conditions.</p>
                    <p>Stay hydrated and use sunscreen in hot weather.</p>
                    <p>Be prepared for sudden weather changes.</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherPage;
