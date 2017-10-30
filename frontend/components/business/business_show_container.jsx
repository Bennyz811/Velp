import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchBusiness} from '../../actions/business_actions';
import {selectBusiness} from '../../reducers/selectors';
// import businessesReducer from '../reducers/business_reducer';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  debugger
  const bizId = ownProps.match.params.businessId;
  const business = state.entities.businesses[bizId];
  return {
    bizId,
    business,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: id => dispatch(fetchBusiness(id))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow));
