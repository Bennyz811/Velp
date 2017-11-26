import merge from 'lodash/merge';
import {SEARCH_BUSINESSES} from '../actions/business_actions';


const _initialState = {input: []};

const searchReducer = (state = _initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SEARCH_BUSINESSES:
    // debugger
      // return merge({}, state, {input: action.input})
      return {input: action.input};
    default:
      return state;

  }
};

export default searchReducer;
