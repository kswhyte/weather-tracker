import React, { PropTypes } from 'react';
import moment from 'moment';

const ThreeHourSummary = ({ data }) => {
  const mainTemp = data ? Math.round(data.main.temp) : 'mainTemp';
  const humidity = data ? Math.round(data.main.humidity) : 'humidity';
  const windSpeed = data ? Math.round(data.wind.speed) : 'windSpeed';
  const description = data ? data.weather[0].description : 'description';
  const time = data ? data.dt : 'time';

  return (
    <div>
      <h3>{moment.unix(time).calendar()}</h3>
      <h4 className="summary-data">Description: {description}</h4>
      <h4 className="summary-data">Temp: {mainTemp}°F</h4>
      <h4 className="summary-data">Humidity: {humidity}%</h4>
      <h4 className="summary-data">Wind: {windSpeed} MPH </h4>
    </div>
  );
};

ThreeHourSummary.propTypes = {
  data: PropTypes.obj,
};

module.exports = ThreeHourSummary;
