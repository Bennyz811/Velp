import merge from 'lodash/merge';
import {RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS, REMOVE_BUSINESS, SEARCH_BUSINESSES} from '../actions/business_actions';

let _initialState = [];
const businessesReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
    // return merge({}, state, {[action.business.business.id]: action.business.business})
      return action.business;
    case SEARCH_BUSINESSES:
      return state.concat(action.input);
    case REMOVE_BUSINESS:
      let newState = [].concat(state);
      delete newState[action.businessId];
      return newState;
    default:
      return state;
  }
};

export default businessesReducer;
