import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const _defaultState = [];
const SessionErrors = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
    debugger
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
}

export default SessionErrors;
