import {connect} from 'react-redux';
import {fetchBusiness, fetchAllBusiness} from '../../actions/business_actions';
import BusinessIndex from './business_index';
import {updateFilter} from '../../actions/filter_actions';
import {selectAllBiz} from '../../reducers/selectors';

// const mapStateToProps = state => {
//   return {
//     businesses: Object.values(state.entities.businesses)
//   };
// };

const mapStateToProps = (state, ownProps) => {
  // category: filters.category,
  const biz = selectAllBiz(state.entities.search.input).filter((biz) => {
    return biz !== undefined;
  });
  return {
    businesses: biz
  };
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filters) => dispatch(updateFilter(filters)),
  fetchAllBusiness: () => dispatch(fetchAllBusiness()),
  fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
