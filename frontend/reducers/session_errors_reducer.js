import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const SessionErrors = (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_SESSION_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
}

export default SessionErrors;
