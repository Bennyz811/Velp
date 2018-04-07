import merge from 'lodash/merge';
import {RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS, REMOVE_BUSINESS, SEARCH_BUSINESSES, SEARCH_NEW_BUSINESSES} from '../actions/business_actions';

let _initialState = {};
const businessesReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return action.business;
    default:
      return state;
  }
};

export default businessesReducer;
