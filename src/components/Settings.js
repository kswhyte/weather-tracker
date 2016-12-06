import React, { PropTypes } from 'react';
import { pull, isUndefined } from 'lodash';
import { Link } from 'react-router';

import NewLocationInputContainer from '../containers/NewLocationInputContainer';

const Settings = ({ pinnedCities, removeCity }) => {
  pinnedCities = pull(pinnedCities, undefined); //eslint-disable-line

  let disabled = '';

  if (!isUndefined(pinnedCities)) {
    disabled = pinnedCities.length >= 3 ? 'disabled' : '';
  }
  return (
    <div className="settings-menu">
      <h1 className="pinned-cities-title">Pinned Cities:</h1>
      <ul className="settings-city-list">
        {pinnedCities ?
        pinnedCities.map((city, i) =>
          <li
            className="pinned-city-name"
            key={i}
          >
            <Link to={`/weather/${city}`}>
              {city}
            </Link>
            <button
              className="delete-button"
              onClick={() => removeCity(city)}
            >X
            </button>
          </li>,
        )
        : <li className="add-city-text">Pin up to 3 cities below: </li>}
      </ul>
      <NewLocationInputContainer disabled={disabled} />
    </div>
  );
};

Settings.propTypes = {
  pinnedCities: PropTypes.arr,
  removeCity: PropTypes.func,
};

module.exports = Settings;
