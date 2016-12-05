import { connect } from 'react-redux';
import CurrentWeather from '../components/CurrentWeather';
import { fetchForecast } from '../actions/index';

const mapStateToProps = (state) => {
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
  fetchForecast,
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
