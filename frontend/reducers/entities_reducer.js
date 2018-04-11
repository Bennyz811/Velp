import {combineReducers} from 'redux';
import businessesReducer from './business_reducer';
import reviewReducer from './review_reducer';
import searchReducer from './search_reducer';
import recommendationReducer from './recommend_reducer';

export default combineReducers({
  selectedBusiness: businessesReducer,
  businessReviews: reviewReducer,
  searchResults: searchReducer,
  recommendations: recommendationReducer
});
