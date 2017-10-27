export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const REMOVE_BUSINESS = 'REMOVE_BUSINESS';
export const UPDATE_BUSINESS = 'UPDATE_BUSINESS';
export const RECEIVE_BUSINESS_ERRORS = 'RECEIVE_BUSINESS_ERRORS';


import * as bizAPIUtil from '../util/business_api_util';

const receiveAllBusinesses = businesses => ({
  type: RECEIVE_ALL_BUSINESSES, businesses
})

const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS, business
})

const removeBusiness = businessId => ({
  type: REMOVE_BUSINESS, businessId
})

const receiveBusinessErrors = errors => ({
  type: RECEIVE_BUSINESS_ERRORS, errors
})

export const fetchAllBusiness = () => dispatch => (
  bizAPIUtil.fetchAllBusiness().then(businesses => dispatch(receiveAllBusinesses(businesses)))
)

export const fetchBusiness = business => dispatch => (
  bizAPIUtil.fetchBusiness(business).then(business => dispatch(receiveBusiness(business)))
)

export const createBusiness = business => dispatch => (
  bizAPIUtil.createBusiness(business).then(business => dispatch(receiveBusiness(business)))
)

export const updateBusiness = business => dispatch => (
  bizAPIUtil.updateBusiness(business).then(business => dispatch(receiveBusiness(business)))
)

export const deleteBusiness = businessId => dispatch => (
  bizAPIUtil.deleteBusiness(businessId).then(business => dispatch(removeBusiness(businessId)))
)
