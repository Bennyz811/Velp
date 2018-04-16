import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({session}, ownProps) => {
  return {
    currentUser: session.currentUser,
    nav: ownProps.nav
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
