import React, { PropTypes } from 'react';

const WeatherSummary = ({ currentTemp, lowTemp, highTemp, mainWeather, city }) => {
  return (
    <div>
      {mainWeather === '' ? <h2>There was an error :(</h2> :
      <div>
        <h2> Location: {city} </h2>
        <h3> Current: {currentTemp}°F </h3>
        <h3> Description: {mainWeather} </h3>
        <h3> Low: {lowTemp}°F </h3>
        <h3> High: {highTemp}°F </h3>
      </div>}
    </div>
  );
};

WeatherSummary.propTypes = {
  currentTemp: PropTypes.int,
  lowTemp: PropTypes.int,
  highTemp: PropTypes.int,
  mainWeather: PropTypes.string,
  city: PropTypes.string,
};

module.exports = WeatherSummary;
