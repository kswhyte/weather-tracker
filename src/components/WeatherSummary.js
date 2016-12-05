import React, { PropTypes } from 'react';

const WeatherSummary = ({ currentTemp, lowTemp, highTemp, mainWeather, city, loading }) => {
  return (
    <div>
      {mainWeather === '' ? <h2>There was an error :(</h2> :
      <div>
        <h2> Location: {loading ? 'loading...' : city} </h2>
        <h3> Current: {loading ? 'loading...' : currentTemp}°F </h3>
        <h3> Description: {loading ? 'loading...' : mainWeather} </h3>
        <h3> Low: {loading ? 'loading...' : lowTemp}°F </h3>
        <h3> High: {loading ? 'loading...' : highTemp}°F </h3>
      </div>}
    </div>
  );
};

WeatherSummary.propTypes = {
  currentTemp: PropTypes.number,
  lowTemp: PropTypes.number,
  highTemp: PropTypes.number,
  mainWeather: PropTypes.string,
  city: PropTypes.string,
};

module.exports = WeatherSummary;
