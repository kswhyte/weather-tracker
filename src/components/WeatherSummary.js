import React, { PropTypes } from 'react';

const WeatherSummary = ({ currentTemp, lowTemp, highTemp, mainWeather, city, loading }) => {
  return (
    <div>
      {mainWeather === '' ? <h2>There was an error :(</h2> :
      <div>
        <h2> Location: <span className="span">{loading ? 'loading...' : city}</span></h2>
        <h3> Current: <span className="span">{loading ? 'loading...' : currentTemp}°F</span></h3>
        <h3> Description: <span className="span">{loading ? 'loading...' : mainWeather}</span></h3>
        <h3> Low: <span className="span">{loading ? 'loading...' : lowTemp}°F</span></h3>
        <h3> High: <span className="span">{loading ? 'loading...' : highTemp}°F</span></h3>
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
