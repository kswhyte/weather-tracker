import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import CurrentWeatherContainer from './containers/CurrentWeatherContainer';
import SettingsContainer from './containers/SettingsContainer';
import ExtendedForecast from './components/ExtendedForecast';
import FullDay from './components/FullDay';
import App from './containers/AppContainer';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRedirect to="/weather/currentLocation" component={CurrentWeatherContainer} />
      <Route path="/weather/:city" component={CurrentWeatherContainer} />
      <Route path="/settings" component={SettingsContainer} />
      <Route path="/extendedforecast" component={ExtendedForecast} />
      <Route path="/fullday" component={FullDay} />
    </Route>
  </Router>
);

export default Routes;
