import merge from 'lodash/merge';
import {UPDATE_FILTER} from '../actions/filter_actions'

let _initialState = Object.freeze({ bounds: {}});
const FilterReducer = (state = _initialState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case UPDATE_FILTER:
      return merge({}, state, {[action.filter]: action.value})
    default:
      return state;
  }
}

export default FilterReducer;
