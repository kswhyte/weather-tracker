import React from 'react';
import moment from 'moment';

const WeekSummary = ({ data }) => {
  return (
    <div>
      <h3>{moment.unix(data.dt).calendar()}</h3>
      <h4>Description: {data.weather[0].description}</h4>
    </div>
  );
};

module.exports = WeekSummary;
