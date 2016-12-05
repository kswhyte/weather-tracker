import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { removeCity } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    pinnedCities: state.weatherApp.pinnedCities,
  };
};

const mapDispatchToProps = ({
  removeCity,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
