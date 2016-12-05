import React, { PropTypes } from 'react';
import WeekSummary from './WeekSummary';

const ExtendedForecast = ({ fullWeek }) => {
  return (
    <div>
      {fullWeek.map(d => <WeekSummary data={d} key={d.dt} />)}
    </div>
  );
};

ExtendedForecast.propTypes = {
  fullWeek: PropTypes.string,
};

module.exports = ExtendedForecast;
