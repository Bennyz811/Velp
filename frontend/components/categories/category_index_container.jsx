import {connect} from 'react-redux';
import CategoryIndex from './category_index';
import {fetchAllBusiness} from '../../actions/business_actions';

const mapStateToProps = ({session, biz}) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, {location}) => {
  return {
    fetchAllBusiness: () => dispatch(fetchAllBusiness())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIndex);
