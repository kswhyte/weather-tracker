import React from 'react';
import moment from 'moment';

const ThreeHourSummary = ({ data }) => {
  return (
    <div>
      <h3>{moment.unix(data.dt).calendar()}</h3>
      <h4>Description: {data.weather[0].description}</h4>
      <h4>Temp: {data.main.temp}</h4>
      <h4>Humidity: {data.main.humidity}</h4>
      <h4>Wind: {data.wind.speed}</h4>
    </div>
  );
};

module.exports = ThreeHourSummary;
