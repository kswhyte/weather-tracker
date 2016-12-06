import React, { PropTypes } from 'react';

const WeatherSummary = ({ currentTemp, lowTemp, highTemp, mainWeather, city, loading }) => {
  return (
    <div>
      {mainWeather === '' ? <h2>There was an error :(</h2> :
      <section>
        <h2> Location: <span className="span">{loading ? 'Loading...' : city}</span></h2>
        <h3> Temperature: <span className="span">{loading ? 'Loading...' : currentTemp}°F</span></h3>
        <h3> Currently: <span className="span">{loading ? 'Loading...' : mainWeather}</span></h3>
        <h3> Low: <span className="span">{loading ? 'Loading...' : lowTemp}°F</span></h3>
        <h3> High: <span className="span">{loading ? 'Loading...' : highTemp}°F</span></h3>
      </section>}
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
