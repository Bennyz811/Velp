export const fetchAllBusiness = () => {
  return $.ajax({
    method: 'get',
    url: '/api/businesses'
  });
};

export const fetchBusiness = id => {
  return $.ajax({
    method: 'get',
    url: `/api/businesses/${id}`
  });
};

export const createBusiness = business => {
  return $.ajax({
    method: 'post',
    url: '/api/businesses',
    data: {business}
  });
};

export const updateBusiness = business => {
  return $.ajax({
    method: 'patch',
    url: `/api/businesses/${business.id}`,
    data: {business}
  });
};

export const deleteBusiness = businessId => {
  return $.ajax({
    method: 'delete',
    url: `/api/businesses/${businessId}`
  });
};

export const searchBusinesses = (query, offSet) => {
  return $.ajax({
    method: 'get',
    url: '/api/businesses/search',
    data: {query: query.searchTerm, offSet}
  });
};
