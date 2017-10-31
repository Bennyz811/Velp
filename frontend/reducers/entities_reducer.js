import {combineReducers} from 'redux';
import businessesReducer from './business_reducer';
import reviewReducer from './review_reducer';

export default combineReducers({
  businesses: businessesReducer,
  reviews: reviewReducer,
});
