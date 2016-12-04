import React from 'react';
import moment from 'moment';

const ThreeHourSummary = ({ data }) => {
  const mainTemp = Math.round(data.main.temp);
  const humidity = Math.round(data.main.humidity);
  const windSpeed = Math.round(data.wind.speed);

  return (
    <div className="three-hour weather-card">
      <h3>{moment.unix(data.dt).calendar()}</h3>
      <h4 className="summary-data">Description: {data.weather[0].description}</h4>
      <h4 className="summary-data">Temp: {mainTemp}°F</h4>
      <h4 className="summary-data">Humidity: {humidity}%</h4>
      <h4 className="summary-data">Wind: {windSpeed} MPH </h4>
    </div>
  );
};

module.exports = ThreeHourSummary;
