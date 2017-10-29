import merge from 'lodash/merge';
import {SEARCH_BUSINESSES} from '../business_actions';

const _initialState = {input: null};

const searchReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SEARCH_BUSINESSES:
      return merge({}, state, {input: action.input})
    default:
      return state;

  }
}

export default searchReducer;
