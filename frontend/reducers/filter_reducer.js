import merge from 'lodash/merge';
import {UPDATE_FILTER} from '../actions/filter_actions'

let _initialState = {};
const FilterReducer = (state = _initialState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_FILTER:
      newState = Object.assign({}, state, {bounds: action.bounds})
    default:
      return state;
  }
}

export default FilterReducer;
