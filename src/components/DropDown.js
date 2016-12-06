import React from 'react';
import { pull } from 'lodash';
import { Link } from 'react-router';

const DropDown = ({ pinnedCities }) => {
  pinnedCities = pull(pinnedCities, undefined); //eslint-disable-line

  return (
    <ul className="drop-down-list-items">
      {pinnedCities ?
      pinnedCities.map((city, i) =>
        <li
          className="city-name"
          key={i}
        >
          <Link to={`/weather/${city}`}>
            {city}
          </Link>
        </li>,
        )
      : null}
      <li className="current-location-link">
        <Link to={'/weather/currentLocation'}>
          Current Location
        </Link>
      </li>
      <li className="add-city-link">
        <Link to={'/settings'}>
          <span className="plus-symbol">+</span>
        </Link>
      </li>
    </ul>
  );
};

module.exports = DropDown;
