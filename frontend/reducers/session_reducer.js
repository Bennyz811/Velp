import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/session_actions';

const _defaultState = {currentUser: null};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case REMOVE_CURRENT_USER:
      return merge({}, state, { currentUser: null });
    default:
      return state;

  }
}

export default sessionReducer;
