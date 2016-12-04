import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import NewLocationInputContainer from '../containers/NewLocationInputContainer';

class App extends Component {

  componentWillMount() {
    const { fetchForecast } = this.props;
    navigator.geolocation.getCurrentPosition((position) => {
      fetchForecast(position.coords.latitude, position.coords.longitude);
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
