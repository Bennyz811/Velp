import {connect} from 'react-redux';
import {createReview, updateReview, deleteReview} from '../../actions/review_actions';
import ReviewForm from './review_form';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let review = {body: "", rating: 0};
  let formType = "write_review"
  if (ownProps.match.path == '/businesses/:businessId/edit'){
    review = state.reviews[ownProps.match.params.reviewId];
    formType = 'edit';
  }
  return {review, formType};
}

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
