import merge from 'lodash/merge';
import {RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW, UPDATE_REVIEW} from '../actions/review_actions';

let _initialState = {};
const reviewReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review})
    case REMOVE_REVIEW:
      let newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;

  }

}

export default reviewReducer;