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
    default:
      return state;
  }

};

export default reviewReducer;
