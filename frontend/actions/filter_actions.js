import {fetchAllBusiness, fetchSearchBusinesses, searchForBusinesses} from './business_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filters, value) => ({
  type: UPDATE_FILTER,
  filters,
  value
});

export const updateFilter = (filters, value) => (dispatch, getState) => {
  dispatch(changeFilter(filters, value));
  return searchForBusinesses(getState().ui.filters.categories)(dispatch);
  // return dispatch(fetchAllBusiness(filters.searchTerm));
};
