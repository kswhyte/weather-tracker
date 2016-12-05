import { connect } from 'react-redux';
import DropDown from '../components/DropDown';

const mapStateToProps = (state) => {
  return {
    pinnedCities: state.weatherApp.pinnedCities,
  };
};

const mapDispatchToProps = ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
