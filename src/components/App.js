import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';


class App extends Component {

  componentWillMount() {
    const { fetchForecast } = this.props;
    navigator.geolocation.getCurrentPosition((position) => {
      fetchForecast({ lat: position.coords.latitude, lon: position.coords.longitude });
      // fetchForecast({ city: 'london' });
    });
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        { this.props.children }
      </div>
    );
  }
}

module.exports = App;
