import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js'
import { fetchForecast, receiveForecast } from '../actions/index.js'

class App extends Component {

  componentWillMount () {
    navigator.geolocation.getCurrentPosition((position) => {
      receiveForecast();
      fetchForecast(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <div>
      <HeaderContainer />
      </div>
    )
  }
}

module.exports = App
