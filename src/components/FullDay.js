import React from 'react';
import ThreeHourSummary from './ThreeHourSummary';

const FullDay = ({ fullDay }) => {
  return (
    <div>
      {fullDay.map((d, i) => <ThreeHourSummary data={d} key={i} />)}
    </div>
  );
};

module.exports = FullDay;
