import React, { Component } from 'react';
import SettingsContainer from '../containers/SettingsContainer';
import NewLocationInputContainer from '../containers/NewLocationInputContainer';

const Settings = ({ pinnedCities, onSubmit }) => {
  let input;
  return (
    <div>
      <h1 className="pinned-cities-title">Pinned Cities:</h1>
      <ul className="settings-city-name">
        {pinnedCities ?
            pinnedCities.map(city => <li key={Math.random()}>{city.city}</li>)
          : <li>Add a city to the list below: </li>}
      </ul>
      <NewLocationInputContainer />
    </div>
  );
};


module.exports = Settings;
