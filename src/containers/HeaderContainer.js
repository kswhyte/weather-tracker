import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  // return an object of redux store data
  // that you'd like available in your component
  // this will need current location by default or user choice location
  const { city } = state.weatherApp;
  return {
    city,
  };
};

const mapDispatchToProps = (dispatch) => {
  // return an object of methods you'd like
  // to dispatch as redux actions
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
