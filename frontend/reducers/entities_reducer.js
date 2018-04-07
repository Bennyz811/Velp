import {combineReducers} from 'redux';
import businessesReducer from './business_reducer';
import reviewReducer from './review_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
  selectedBusiness: businessesReducer,
  reviews: reviewReducer,
  searchResults: searchReducer,
});
