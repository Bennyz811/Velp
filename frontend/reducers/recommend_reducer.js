import merge from "lodash/merge";
import { FETCH_RECOM } from "../actions/recommend_actions";

let _initialState = [];
const recommendationReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_RECOM:
      return action.fetchedData;
    default:
      return state;
  }
};

export default recommendationReducer;
