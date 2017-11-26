import {connect} from 'react-redux';
import Header from './header';
import {withRouter} from 'react-router-dom';
import {logout} from '../../actions/session_actions';
import {fetchAllBusiness} from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllBusiness: () => dispatch(fetchAllBusiness())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
