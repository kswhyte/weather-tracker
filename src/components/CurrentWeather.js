import React, { Component } from 'react';

class CurrentWeather extends Component {
  render() {

    const currentTemp = Math.round(this.props.temp)

    const lowTemp = Math.round(this.props.tempMin)

    const highTemp = Math.round(this.props.tempMax)

    return (
      <div>
        <h3> Currently: {currentTemp}°F </h3>
        <h3> Low: {lowTemp}°F </h3>
        <h3> High: {highTemp}°F </h3>
      </div>
    );
  }
}

module.exports = CurrentWeather;
