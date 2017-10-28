import {combineReducers} from 'redux';
import businessesReducer from './business_reducer';

export default combineReducers({
  businesses: businessesReducer,
});
