export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const REMOVE_BUSINESS = 'REMOVE_BUSINESS';
export const UPDATE_BUSINESS = 'UPDATE_BUSINESS';
export const RECEIVE_BUSINESS_ERRORS = 'RECEIVE_BUSINESS_ERRORS';


import * as BizAPIUtil from '../util/business_api_util';

const receiveAllBusinesses = businesses => ({
  type: RECEIVE_ALL_BUSINESSES, businesses
})

const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS, business
})

const removeBusiness = businessID => ({
  type: REMOVE_BUSINESS, businessID
})

const updateBusiness = business =>({
  type: UPDATE_BUSINESS, business
})

const receiveBusinessErrors = errors => ({
  type: RECEIVE_BUSINESS_ERRORS, errors
})

export const fetchAllBusiness = () => dispatch => ({
  BizAPIUtil.fetchAllBusiness().then(() => dispatch(receiveAllBusinesses()));
})

export const fetchBusiness = business => dispatch => ({
  BizAPIUtil.fetchBusiness(business).then(business => dispatch(receiveBusiness(business)));
})

export const createBusiness = business => dispatch => ({
  BizAPIUtil.createBusiness(business).then(business => dispatch(receiveBusiness(business)));
})

export const updateBusiness = business => dispatch => ({
  BizAPIUtil.updateBusiness(business).then(business => dispatch(receiveBusiness(business)));
})

export const deleteBusiness = businessId => dispatch => ({
  BizAPIUtil.deleteBusiness(businessId).then(business => dispatch(removeBusiness(businessId)));
})
