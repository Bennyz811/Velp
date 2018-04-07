import merge from 'lodash/merge';
import {SEARCH_BUSINESSES, SEARCH_NEW_BUSINESSES} from '../actions/business_actions';


// const _initialState = {input: []};
const _initialState = [];

const searchReducer = (state = _initialState, action) => {
  Object.freeze(state);

  console.log('search reducer')
  switch (action.type) {
    case SEARCH_BUSINESSES:
      // return merge({}, state, {input: action.input})
      return state.concat(action.input);
    case SEARCH_NEW_BUSINESSES:
      return action.input;
    default:
      return state;

  }
};

export default searchReducer;
