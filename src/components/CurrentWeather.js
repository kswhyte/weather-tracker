import React, { Component } from 'react';

class CurrentWeather extends Component {
  render() {

let currentTemp = Math.round(this.props.temp)
    return (
      <div>
        <h3> Currently: {currentTemp}°F </h3>
        <h3> Low: {this.props.tempMin}°F </h3>
        <h3> High: {this.props.tempMax}°F </h3>
      </div>
    );
  }
}

module.exports = CurrentWeather;
