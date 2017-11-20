import {connect} from 'react-redux';
import {fetchAllBusiness, fetchBusiness} from '../../actions/business_actions';
import {selectAllBiz} from '../../reducers/selectors';
import Recommended from './business_recom';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    businesses: selectAllBiz(state.entities.businesses).slice(0,3)
  };
};

const mapDispatchToProps = (dispatch, {location}) => {
  return {
    fetchAllBusiness: () => dispatch(fetchAllBusiness())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommended);
