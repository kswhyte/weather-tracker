import { connect } from 'react-redux';
import CurrentWeather from '../components/CurrentWeather';
import { fetchForecast } from '../actions/index';

const mapStateToProps = (state) => {
  const { temp, tempMin, tempMax, mainWeather,
          fullDay, fullWeek, city, loading } = state.weatherApp;
  return {
    city,
    temp,
    tempMin,
    tempMax,
    mainWeather,
    fullDay,
    fullWeek,
    loading,
  };
};

const mapDispatchToProps = ({
  fetchForecast,
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
