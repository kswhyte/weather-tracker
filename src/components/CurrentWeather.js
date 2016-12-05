import React, { Component } from 'react';

import ExtendedForecast from './ExtendedForecast';
import FullDay from './FullDay';
import WeatherSummary from './WeatherSummary';

class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      hideExtended: true,
      hideFullDay: true,

      currentCity: '',
    };
    this.toggleHideExtended = this.toggleHideExtended.bind(this);
    this.toggleHideFullDay = this.toggleHideFullDay.bind(this);
  }

  componentWillMount() {
    const { fetchForecast } = this.props;
    if (this.props.params) {
      if (this.props.params.city === 'currentLocation') {
        navigator.geolocation.getCurrentPosition((position) => {
          fetchForecast({ lat: position.coords.latitude, lon: position.coords.longitude });
        });
      } else {
        fetchForecast({ city: this.props.params.city });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { fetchForecast } = this.props;
    const nextPropsParamCity = nextProps.params.city ? nextProps.params.city.toLowerCase() : '';
    const currentParamCity = this.props.params.city ? this.props.params.city.toLowerCase() : '';
    const renderedCity = this.props.city ? this.props.city.toLowerCase() : '';

    if (currentParamCity !== 'currentlocation') {
      if (currentParamCity !== renderedCity || nextPropsParamCity !== currentParamCity) {
        fetchForecast({ city: this.props.params.city });
      }
    }
  }

  toggleHideExtended() {
    this.setState({
      hideExtended: !this.state.hideExtended,
    });
    if (!this.state.hideExtended) {
      this.setState({
        hideFullDay: true,
      });
    }
  }

  toggleHideFullDay() {
    this.setState({
      hideFullDay: !this.state.hideFullDay,
    });
    if (!this.state.hideFullDay) {
      this.setState({
        hideExtended: true,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="current weather-card">
          <WeatherSummary
            currentTemp={Math.round(this.props.temp)}
            lowTemp={Math.round(this.props.tempMin)}
            highTemp={Math.round(this.props.tempMax)}
            mainWeather={this.props.mainWeather}
          />
          <div className="fullday">
            <button
              className="fullday-button"
              onClick={this.toggleHideFullDay}
            >Show Full Day Forecast </button>
          </div>
        </div>
        <div className="extended">
          <button
            className="extended-button"
            onClick={this.toggleHideExtended}
          > Show Extended Forecast
          </button>
        </div>
        {!this.state.hideFullDay && (<FullDay fullDay={this.props.fullDay} />)}
        {!this.state.hideExtended && (<ExtendedForecast fullWeek={this.props.fullWeek} />)}
      </div>
    );
  }
}

module.exports = CurrentWeather;
