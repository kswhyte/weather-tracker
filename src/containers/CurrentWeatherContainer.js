import { connect } from 'react-redux';
import CurrentWeather from '../components/CurrentWeather';
import { fetchForecast } from '../actions/index';

const mapStateToProps = (state) => {
  // return an object of redux store data
  // that you'd like available in your component
  const { temp, tempMin, tempMax, mainWeather, fullDay, fullWeek, city } = state.weatherApp;
  return {
    city,
    temp,
    tempMin,
    tempMax,
    mainWeather,
    fullDay,
    fullWeek,
  };
};

const mapDispatchToProps = ({
  // return an object of methods you'd like
  // to dispatch as redux actions
  fetchForecast,
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
