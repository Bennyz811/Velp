import merge from 'lodash/merge';
import {
  RECEIVE_BUSINESS_REVIEWS,
  RECEIVE_MORE_BUSINESS_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  UPDATE_REVIEW
} from "../actions/review_actions";
import {RECEIVE_BUSINESS} from '../actions/business_actions';

let _initialState = [];
const reviewReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS_REVIEWS:
      return action.businessReviews;
    case RECEIVE_MORE_BUSINESS_REVIEWS:
      return state.concat(action.businessReviews);
    // case RECEIVE_REVIEW:
    //   return merge({}, state, {[action.review.id]: action.review});
    // case REMOVE_REVIEW:
    //   let newState = merge({}, state);
    //   delete newState[action.reviewId];
    //   return newState;
    // case RECEIVE_BUSINESS:
    //   return merge({}, state, action.business.reviews);
    default:
      return state;

  }

};

export default reviewReducer;
