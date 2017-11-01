import {connect} from 'react-redux';
import {fetchAllReviews, fetchReview, createReview, updateReview, deleteReview} from '../../actions/review_actions';
import ReviewForm from './review_form';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let review = { body: "", rating: 0 };
  let formType = "write_review";
  let currentUser = state.session.currentUser;
  if (ownProps.match.path == '/businesses/:businessId/edit'){
    review = state.reviews[ownProps.match.params.reviewId];
    formType = 'edit';
  }
  return {review, formType, currentUser};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === '/:businessId/write_review' ? createReview : updateReview;
  return {
    fetchReview: id => dispatch(fetchReview(id)),
    action: review => dispatch(action(review))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
