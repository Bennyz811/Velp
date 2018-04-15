import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import imageUpload from './image_upload';
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
)(imageUpload));
