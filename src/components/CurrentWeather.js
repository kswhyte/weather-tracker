import React, { Component, PropTypes } from 'react';

import ExtendedForecast from './ExtendedForecast';
import FullDay from './FullDay';
import WeatherSummary from './WeatherSummary';

class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      hideExtended: true,
      hideFullDay: true,
    };
    this.toggleHideExtended = this.toggleHideExtended.bind(this);
    this.toggleHideFullDay = this.toggleHideFullDay.bind(this);
  }

  componentWillMount() {
    const { fetchForecast, loadingAction } = this.props;
    const currentParamCity = this.props.params ? this.props.params.city.toLowerCase() : '';

    if (currentParamCity === 'currentlocation') {
      loadingAction();
      navigator.geolocation.getCurrentPosition((position) => {
        fetchForecast({ lat: position.coords.latitude, lon: position.coords.longitude });
      });
    } else {
      fetchForecast({ city: this.props.params.city });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { fetchForecast, loadingAction } = this.props;
    const nextPropsParamCity = nextProps.params.city ? nextProps.params.city.toLowerCase() : '';
    const currentParamCity = this.props.params.city ? this.props.params.city.toLowerCase() : '';

    if (nextPropsParamCity !== currentParamCity) {
      if (nextPropsParamCity === 'currentlocation') {
        loadingAction();
        navigator.geolocation.getCurrentPosition((position) => {
          fetchForecast({ lat: position.coords.latitude, lon: position.coords.longitude });
        });
      } else {
        fetchForecast({ city: nextPropsParamCity });
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
            city={this.props.city}
            currentTemp={Math.round(this.props.temp)}
            lowTemp={Math.round(this.props.tempMin)}
            highTemp={Math.round(this.props.tempMax)}
            mainWeather={this.props.mainWeather}
            loading={this.props.loading}
          />
        </div>
        <div className="fullday">
          <button
            className="fullday-button"
            onClick={this.toggleHideFullDay}
          >
            Show <span className="span">Full Day</span> Forecast
          </button>
        </div>
        <div className="extended">
          <button
            className="extended-button"
            onClick={this.toggleHideExtended}
          > Show <span className="span">Extended</span> Forecast
          </button>
        </div>
        {!this.state.hideFullDay && (<FullDay fullDay={this.props.fullDay} />)}
        {!this.state.hideExtended && (<ExtendedForecast fullWeek={this.props.fullWeek} />)}
      </div>
    );
  }
}

CurrentWeather.propTypes = {
  temp: PropTypes.number,
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  mainWeather: PropTypes.string,
  city: PropTypes.string,
  fetchForecast: PropTypes.func,
};

module.exports = CurrentWeather;
