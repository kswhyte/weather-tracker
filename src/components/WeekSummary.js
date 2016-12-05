import React from 'react';
import moment from 'moment';

const WeekSummary = ({ data }) => {
  const highTemp = data ? Math.round(data.temp.max) : 'highTemp';
  const lowTemp = data ? Math.round(data.temp.min) : 'lowTemp';
  const humidity = data ? Math.round(data.humidity) : 'humidity';
  const windSpeed = data ? Math.round(data.speed) : 'windSpeed';
  const dateFormatted = data ? moment.unix(data.dt).format('dddd') : 'date';
  const description = data ? data.weather[0].description : 'description';

  return (
    <div className="weather-card">
      <section className="extended-weather-card">
        <h3>{dateFormatted}</h3>
        <h4 className="summary-data">Description: {description}</h4>
        <h4 className="summary-data">High: {highTemp}°F </h4>
        <h4 className="summary-data">Low: {lowTemp}°F</h4>
        <h4 className="summary-data">Humidity: {humidity}% </h4>
        <h4 className="summary-data">Wind Speed: {windSpeed} MPH</h4>
      </section>
    </div>
  );
};

module.exports = WeekSummary;
