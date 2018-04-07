import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchAllReviews} from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  const biz = state.entities.selectedBusiness.business;
  const reviewIds = biz.review_ids;
  const reviews = [];
  reviewIds.forEach(id => {
    const review = state.entities.selectedBusiness.reviews[id];
    if (review) {
      return reviews.push(review);
    }
  });
  return {
    reviews: reviews
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllReviews: () => dispatch(fetchAllReviews())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex));
