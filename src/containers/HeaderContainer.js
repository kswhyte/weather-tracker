import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  const { city, pinnedCities } = state.weatherApp;
  return {
    city,
    pinnedCities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
