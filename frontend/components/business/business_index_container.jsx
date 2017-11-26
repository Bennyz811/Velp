import {connect} from 'react-redux';
import {fetchBusiness, fetchAllBusiness} from '../../actions/business_actions';
import BusinessIndex from './business_index';
import {updateFilter} from '../../actions/filter_actions';
import {fetchSearchBusinesses, searchForBusinesses} from '../../actions/business_actions';
import {selectAllBiz} from '../../reducers/selectors';

// const mapStateToProps = state => {
//   return {
//     businesses: Object.values(state.entities.businesses)
//   };
// };

const mapStateToProps = (state, ownProps) => {
  // const biz = searchForBusinesses(state.entities.search.input).filter((b) => {
  //   return b !== undefined;
  // });
  return {
    businesses: state.entities.search.input
  };
};

// const mapDispatchToProps = dispatch => ({
//   updateFilter: (filters, value) => dispatch(updateFilter(filters, value)),
//   fetchAllBusiness: () => dispatch(fetchAllBusiness()),
//   fetchBusiness: id => dispatch(fetchBusiness(id))
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(BusinessIndex);
