export const filterBusiness = (searchInput) => {
  return $.ajax({
    method: 'get',
    url: '/api/businesses',
    data: {searchInput}
  })
}
