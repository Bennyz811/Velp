import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Search from './search';
import {fetchSearchBusinesses, searchForBusinesses} from '../../actions/business_actions';

const mapStateToProps = state => {
  return {
    businesses: Object.values(state.entities.businesses)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchForBusinesses: query => dispatch(searchForBusinesses(query))
  }
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
