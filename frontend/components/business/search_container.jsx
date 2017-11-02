import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Search from './search';
import {fetchSearchBusinesses, searchForBusinesses} from '../../actions/business_actions';

const mapStateToProps = state => {
  return {
    search: state.entities.search
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
