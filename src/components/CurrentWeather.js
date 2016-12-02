import React, { Component } from 'react';

import ExtendedForecastContainer from '../containers/ExtendedForecastContainer';

class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      hideExtended: true,
    };
    this.toggleHideExtended = this.toggleHideExtended.bind(this);
  }

  toggleHideExtended() {
    this.setState({
      hideExtended: !this.state.hideExtended,
    });
  }

  render() {
    const currentTemp = Math.round(this.props.temp);

    const lowTemp = Math.round(this.props.tempMin);

    const highTemp = Math.round(this.props.tempMax);

    return (
      <div>
        <h3> Current: {currentTemp}°F </h3>
        <h3> Description: {this.props.mainWeather} </h3>
        <h3> Low: {lowTemp}°F </h3>
        <h3> High: {highTemp}°F </h3>
        <button onClick={this.toggleHideExtended}> Show Extended Forecast </button>
        <div
          className="extended-forecast"
          hidden={this.state.hideExtended}
        >
          <ExtendedForecastContainer />
        </div>
        {/* {!this.state.hideExtended && (<ExtendedForecastContainer />)} -- alternative to lines 34-39 */}
      </div>
    );
  }
}

module.exports = CurrentWeather;
