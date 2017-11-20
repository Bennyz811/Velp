export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const REMOVE_BUSINESS = 'REMOVE_BUSINESS';
export const UPDATE_BUSINESS = 'UPDATE_BUSINESS';
export const RECEIVE_BUSINESS_ERRORS = 'RECEIVE_BUSINESS_ERRORS';
export const SEARCH_BUSINESSES = 'SEARCH_BUSINESSES';
export const RECEIVE_SEARCH_BUSINESSES = 'RECEIVE_SEARCH_BUSINESSES';


import * as bizAPIUtil from '../util/business_api_util';
import * as searchAPIUtil from '../util/search_api_util';

const receiveAllBusinesses = businesses => ({
  type: RECEIVE_ALL_BUSINESSES, businesses
});

const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS, business
});

const removeBusiness = businessId => ({
  type: REMOVE_BUSINESS, businessId
});

const receiveBusinessErrors = errors => ({
  type: RECEIVE_BUSINESS_ERRORS, errors
});

const searchBusinesses = input => ({
  type: SEARCH_BUSINESSES, input
});

const receiveSearchBusinesses = businesses => ({
  type: RECEIVE_SEARCH_BUSINESSES, businesses
});

export const fetchAllBusiness = () => dispatch => {
  return bizAPIUtil.fetchAllBusiness().then(businesses => {
      return dispatch(receiveAllBusinesses(businesses));
    });
};

export const fetchBusiness = bizId => dispatch => (
  bizAPIUtil.fetchBusiness(bizId).then(business => dispatch(receiveBusiness(business)))
);

export const createBusiness = business => dispatch => (
  bizAPIUtil.createBusiness(business).then(business => dispatch(receiveBusiness(business)))
);

export const updateBusiness = business => dispatch => (
  bizAPIUtil.updateBusiness(business).then(business => dispatch(receiveBusiness(business)))
);

export const deleteBusiness = businessId => dispatch => (
  bizAPIUtil.deleteBusiness(businessId).then(business => dispatch(removeBusiness(businessId)))
);

export const fetchSearchBusinesses = input => dispatch => (
  searchAPIUtil.filterBusiness(input).then(businesses => dispatch(searchBusinesses(businesses)))
);

export const searchForBusinesses = query => dispatch => (
  bizAPIUtil.searchBusinesses(query).then(businesses => dispatch(searchBusinesses(businesses)))
);
