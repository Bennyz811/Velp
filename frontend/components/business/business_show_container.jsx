import {connect} from 'react-redux';
import {fetchAllBusiness} from '../../actions/business/actions';
// import businessesReducer from '../reducers/business_reducer';
import businessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  const bizId = ownProps.match.params.businessId;
  const business = state.business[bizId];
  return {
    bizId,
    business,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id));
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(businessShow)
