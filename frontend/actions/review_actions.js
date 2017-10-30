export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

import * as ReviewAPIUtil from '../util/review_api_util';

const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS, reviews
})

const receiveReview = review => ({
  type: RECEIVE_REVIEW, review
})

const removeReview = reviewId => ({
  type: REMOVE_REVIEW, reviewId
})

export const fetchAllReviews = () => dispatch => {
  return ReviewAPIUtil.fetchAllReviews().then(reviews => dispatch(fetchAllReviews(reviews)))
}

export const fetchReview = id => dispatch => {
  return ReviewAPIUtil.fetchReview(id).then(review => dispatch(receiveReview(review)))
}

export const createReview = review => dispatch => {
  return ReviewAPIUtil.createReview(review).then(review => dispatch(receiveReview(review)))
}

export const updateReview = review => dispatch => {
  return ReviewAPIUtil.updateReview(review).then(review => dispatch(receiveReview(review)))
}

export const deleteReview = reviewId => dispatch => {
  return ReviewAPIUtil.deleteReview(reviewId).then(review => dispatch(removeReview(review)))
}
