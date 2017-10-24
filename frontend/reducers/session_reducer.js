import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const SessionReducer = (state = {}, action){
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, {action.currentUser});
    default:
      return state;

  }
}

export default SessionReducer;
