import {combineReducer} from 'redux';
import session from './session_reducer';

const RootReducer = combineReducer({
  session,
});

export default RootReducer;
