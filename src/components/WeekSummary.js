import React from 'react';
import moment from 'moment';

const WeekSummary = ({ data }) => {
  return (
    <div>
      <h3>{moment.unix(data.dt).calendar()}</h3>
      <h4>Description: {data.weather[0].description}</h4>
      <h4>High: {data.temp.max}</h4>
      <h4>Low: {data.temp.min}</h4>
      <h4>Humidity: {data.humidity}</h4>
      <h4>Wind Speed: {data.speed}</h4>
    </div>
  );
};

module.exports = WeekSummary;
