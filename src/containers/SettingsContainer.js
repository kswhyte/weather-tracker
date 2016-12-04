import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { removeCity } from '../actions/index';

const mapStateToProps = (state) => {
  // return an object of redux store data
  // that you'd like available in your component
  return {
    pinnedCities: state.weatherApp.pinnedCities,
  };
};

const mapDispatchToProps = ({
  // return an object of methods you'd like
// to dispatch as redux actions
  removeCity,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
