import React from 'react';
import { pull } from 'lodash';
import { Link } from 'react-router';

const DropDown = ({ pinnedCities }) => {
  pinnedCities = pull(pinnedCities, undefined); //eslint-disable-line

  return (
    <ul className="settings-city-name">
      {pinnedCities ?
      pinnedCities.map((city, i) =>
        <li key={i}>
          <Link to={`/weather/${city}`}>
            {city}
          </Link>
        </li>,
        )
      : null}
      <li>
        <Link to={'/weather/currentLocation'}>
          Current Location
        </Link>
      </li>
      <li>
        <Link to={'/settings'}>
          +
        </Link>
      </li>
    </ul>
  );
};

module.exports = DropDown;
