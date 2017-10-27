import merge from 'lodash/merge';
import {RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS, REMOVE_BUSINESS} from '../actions/business_actions';
let _initialState = {};
const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      return merge({}, state, {[action.business.id]: action.business})
    case REMOVE_BUSINESS:
      let newState = merge({}, state);
      delete newState[action.businessId];
      return newState;
    default:
      return state;

  }
}

export default businessesReducer;