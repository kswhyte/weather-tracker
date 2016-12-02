import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import CurrentWeatherContainer from './containers/CurrentWeatherContainer';
import SettingsContainer from './containers/SettingsContainer';
import ExtendedForecastContainer from './containers/ExtendedForecastContainer';
import App from './containers/AppContainer';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRedirect to="/currentweather" component={CurrentWeatherContainer} />
      <Route path="/currentweather" component={CurrentWeatherContainer} />
      <Route path="/settings" component={SettingsContainer} />
      <Route path="/extendedforecast" component={ExtendedForecastContainer} />
    </Route>
  </Router>
);

export default Routes;
