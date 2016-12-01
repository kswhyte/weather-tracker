import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import { fetchForecast } from '../actions/index';

class App extends Component {

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchForecast(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <div>
        <HeaderContainer />
      </div>
    );
  }
}

module.exports = App;
