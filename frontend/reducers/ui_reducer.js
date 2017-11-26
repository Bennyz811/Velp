import merge from 'lodash/merge';
import {UPDATE_FILTER} from '../actions/filter_actions'
import {combineReducers} from 'redux';
import FilterReducer from './filter_reducer';

const UiReducer = combineReducers({
  filters: FilterReducer
});

export default UiReducer;
