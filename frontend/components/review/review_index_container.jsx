import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchBusinessReviews} from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  // const biz = state.entities.selectedBusiness.business;
  // const reviewIds = biz.review_ids;
  // const reviews = [];
  // reviewIds.forEach(id => {
  //   const review = state.entities.selectedBusiness.reviews[id];
  //   if (review) {
  //     return reviews.push(review);
  //   }
  // });
  return {
    reviews: state.entities.businessReviews
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBusinessReviews: (revBizId, offSet) => dispatch(fetchBusinessReviews(revBizId, offSet))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex));
