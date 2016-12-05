import React from 'react';

const WeatherSummary = ({ currentTemp, lowTemp, highTemp, mainWeather, city }) => {
  return (
    <div>
      <h2> Location: {city} </h2>
      <h3> Current: {currentTemp}°F </h3>
      <h3> Description: {mainWeather} </h3>
      <h3> Low: {lowTemp}°F </h3>
      <h3> High: {highTemp}°F </h3>
    </div>
  );
};


module.exports = WeatherSummary;
