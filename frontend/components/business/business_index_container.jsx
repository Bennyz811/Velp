import {connect} from 'react-redux';
import {fetchBusiness, fetchAllBusiness} from '../../actions/business_actions';
import BusinessIndex from '.business_index';

const mapStateToProps = state => ({
  businesses: state.entities.businesses
})


const mapDispatchToProps = dispatch => ({
  fetchAllBusiness: () => dispatch(fetchAllBusiness()),
  fetchBusiness: id => dispatch(fetchBusiness(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex)
