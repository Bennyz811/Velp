export const RECEIVE_BUSINESS_REVIEWS = 'RECEIVE_BUSINESS_REVIEWS';
export const RECEIVE_MORE_BUSINESS_REVIEWS = 'RECEIVE_MORE_BUSINESS_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
// export const CREATE_REVIEW = 'CREATE_REVIEW';

import * as ReviewAPIUtil from '../util/review_api_util';

const receiveBusinessReviews = businessReviews => ({
  type: RECEIVE_BUSINESS_REVIEWS, businessReviews
});

const receiveMoreBusinessReviews = businessReviews => ({
  type: RECEIVE_MORE_BUSINESS_REVIEWS, businessReviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW, review
});

const removeReview = reviewId => ({
  type: REMOVE_REVIEW, reviewId
});

export const fetchBusinessReviews = (revBizId, offSet) => dispatch => {
  return ReviewAPIUtil.fetchBusinessReviews(revBizId, offSet)
    .then(businessReviews => dispatch(receiveBusinessReviews(businessReviews)));
};

export const fetchMoreReviews = (revBizId) => dispatch => {
  return ReviewAPIUtil.fetchBusinessReviews(revBizId)
    .then(businessReviews => dispatch(receiveMoreBusinessReviews(businessReviews)));
};

export const fetchReview = id => dispatch => {
  return ReviewAPIUtil.fetchReview(id).then(review => dispatch(receiveReview(review)));
};

export const createReview = review => dispatch => {
  return ReviewAPIUtil.createReview(review).then(review => dispatch(receiveReview(review)));
};

export const updateReview = review => dispatch => {
  return ReviewAPIUtil.updateReview(review).then(review => dispatch(receiveReview(review)));
};

export const deleteReview = reviewId => dispatch => {
  return ReviewAPIUtil.deleteReview(reviewId).then(review => dispatch(removeReview(review)));
};
