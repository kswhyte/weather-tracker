import React, { PropTypes } from 'react';
import moment from 'moment';

const ThreeHourSummary = ({ data }) => {
  const mainTemp = data ? Math.round(data.main.temp) : 'mainTemp';
  const humidity = data ? Math.round(data.main.humidity) : 'humidity';
  const windSpeed = data ? Math.round(data.wind.speed) : 'windSpeed';
  const description = data ? data.weather[0].description : 'description';
  const time = data ? data.dt : 'time';

  return (
    <section className="three-hour weather-card">
      <div
        className={`${description.replace(' ', '-')} icon`}
        alt="weather-description"
      />
      <h3 className="today-at-time">{moment.unix(time).calendar()}</h3>
      <h4 className="summary-data">Description: <span className="span">{description}</span></h4>
      <h4 className="summary-data">Temp: <span className="span">{mainTemp}°F</span></h4>
      <h4 className="summary-data">Humidity: <span className="span">{humidity}%</span></h4>
      <h4 className="summary-data">Wind: <span className="span">{windSpeed} MPH</span></h4>
    </section>
  );
};

ThreeHourSummary.propTypes = {
  data: PropTypes.obj,
};

module.exports = ThreeHourSummary;
