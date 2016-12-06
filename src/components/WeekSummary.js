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
        <div
          className={`${description.replace(' ', '-')} icon`}
          alt="weather-description"
        />
        <h3 className="day-of-the-week">{dateFormatted}</h3>
        <h4 className="summary-data">Description: <span className="span">{description}</span></h4>
        <h4 className="summary-data">High: <span className="span">{highTemp}°F</span></h4>
        <h4 className="summary-data">Low: <span className="span">{lowTemp}°F</span></h4>
        <h4 className="summary-data">Humidity: <span className="span">{humidity}%</span></h4>
        <h4 className="summary-data">Wind Speed: <span className="span">{windSpeed} MPH</span></h4>
      </section>
    </div>
  );
};

module.exports = WeekSummary;
