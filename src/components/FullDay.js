import React from 'react';
import ThreeHourSummary from './ThreeHourSummary';

const FullDay = ({ fullDay }) => {
  console.log('FullDay:', fullDay);
  return (
    <div>
      {fullDay.map(d => <ThreeHourSummary data={d} key={d.dt} />)}
    </div>
  );
};

module.exports = FullDay;
