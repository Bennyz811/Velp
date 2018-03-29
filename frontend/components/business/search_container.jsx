import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Search from './search';
import {fetchSearchBusinesses, searchForBusinesses, searchForNewBusinesses} from '../../actions/business_actions';
import {updateFilter} from '../../actions/filter_actions.js';

const mapStateToProps = state => {
  return {
    search: state.entities.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchForNewBusinesses: input => dispatch(searchForNewBusinesses(input)),
    updateFilter: (filters, value) => dispatch(updateFilter(filters, value))
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
