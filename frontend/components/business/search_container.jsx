import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Search from './search';
import {fetchSearchBusinesses} from '../../actions/business_actions';

const mapStateToProps = state => {
  return {
    businesses: Object.values(state.entities.businesses)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchBusinesses: input => dispatch(fetchSearchBusinesses(input))
  }
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
