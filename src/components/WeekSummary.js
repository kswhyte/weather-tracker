import React from 'react';
import moment from 'moment';

const WeekSummary = ({ data }) => {

  const highTemp = Math.round(data.temp.max);
  const lowTemp = Math.round(data.temp.min);
  const humidity = Math.round(data.humidity);
  const windSpeed = Math.round(data.speed);
  const dateFormatted = moment.unix(data.dt).format('dddd')
  return (
    <div className="weather-card">
      <section className="extended-weather-card">
        <h3>{dateFormatted}</h3>
        <h4 className="summary-data">Description: {data.weather[0].description}</h4>
        <h4 className="summary-data">High: {highTemp}°F </h4>
        <h4 className="summary-data">Low: {lowTemp}°F</h4>
        <h4 className="summary-data">Humidity: {humidity}% </h4>
        <h4 className="summary-data">Wind Speed: {windSpeed} MPH</h4>
      </section>
    </div>
  );
};

module.exports = WeekSummary;
