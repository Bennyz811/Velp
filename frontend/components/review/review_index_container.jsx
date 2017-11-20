import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchAllReviews} from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  // const businessId = ownProps.match.params.businessId
  // const biz = state.entities.businesses[businessId];
  const biz = state.entities.businesses.business;
  const reviewIds = biz.review_ids;
  const reviews = [];
  reviewIds.forEach(id => {
    const review = state.entities.reviews[id];
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
