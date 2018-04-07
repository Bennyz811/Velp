import {connect} from 'react-redux';
import {fetchBusiness, fetchAllBusiness} from '../../actions/business_actions';
import BusinessIndex from './business_index';
import {updateFilter} from '../../actions/filter_actions';
import {fetchSearchBusinesses, searchForBusinesses, searchForNewBusinesses} from '../../actions/business_actions';
import {selectAllBiz} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  console.log("index container")
    return {
      searchResults: state.entities.searchResults,
      selectedBusiness: state.entities.selectedBusiness,
      offSet: state.entities.searchResults.length,
    };
};

const mapDispatchToProps = (dispatch) => {
  // updateFilter: (filters, value) => dispatch(updateFilter(filters, value)),
  // fetchAllBusiness: () => dispatch(fetchAllBusiness()),
  // fetchBusiness: id => dispatch(fetchBusiness(id))
  return {
    searchForBusinesses: (query, offSet) => dispatch(searchForBusinesses(query, offSet)),
    searchForNewBusinesses: input => dispatch(searchForNewBusinesses(input))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
