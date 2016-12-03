import { connect } from 'react-redux';
import CurrentWeather from '../components/CurrentWeather';
import { fetchForecast } from '../actions/index';

const mapStateToProps = (state) => {
  // return an object of redux store data
  // that you'd like available in your component
  const { temp, tempMin, tempMax, mainWeather, fullDay } = state.weatherApp;
  return {
    temp,
    tempMin,
    tempMax,
    mainWeather,
    fullDay,
  };
};

const mapDispatchToProps = ({
  // return an object of methods you'd like
  // to dispatch as redux actions
  fetchForecast,
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
