import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js'

class App extends Component {

  componentWillMount () {
    console.log('Hello!');
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
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
