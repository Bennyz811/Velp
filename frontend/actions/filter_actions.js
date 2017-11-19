import {fetchAllBusiness, fetchSearchBusinesses} from './business_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filters) => ({
  type: UPDATE_FILTER,
  filters
});

export const updateFilter = (filters) => (dispatch, getState) => {
  dispatch(changeFilter(filters));
  // return fetchAllBusiness(getState().filters)(dispatch);
  return dispatch(fetchSearchBusinesses(filters.searchTerm));
};
