import { connect } from 'react-redux';
import NewLocationInput from '../components/NewLocationInput';
import { fetchForecast, pinCity } from '../actions/index';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  onSubmit: fetchForecast,
  pinCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLocationInput);
