import React from 'react';
import WeekSummary from './WeekSummary';

const ExtendedForecast = ({ fullWeek }) => {
  console.log('FullWeek:', fullWeek);
  return (
    <div>
      {fullWeek.map(d => <WeekSummary data={d} key={d.dt} />)}
    </div>
  );
};

module.exports = ExtendedForecast;
