import React from 'react';

const WeatherSummary = ({ currentTemp, lowTemp, highTemp, mainWeather }) => {
  return (
    <div>
      <h4 className="current"> Current: {currentTemp}°F </h4>
      <h4 className="current"> Description: {mainWeather} </h4>
      <h4 className="current"> Low: {lowTemp}°F </h4>
      <h4 className="current"> High: {highTemp}°F </h4>
    </div>
  );
};


module.exports = WeatherSummary;
