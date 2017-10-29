import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Search from './search';
import {searchBusinesses} from '../../actions/business_actions';

const mapStateToProps = state => ({
  businesses: Object.values(state.entities.businesses)
})

const mapDispatchToProps = dispatch => ({
  searchBusinesses: (input) => dispatch(searchBusinesses(input))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
