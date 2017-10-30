export const fetchAllReviews = businessId => {
  return $.ajax({
    method: 'get',
    url: `api/businesses/${businessId}/reviews`
  })
}

export const fetchReview = id => {
  return $.ajax({
    method: 'get',
    url: `api/reviews/${id}`
  })
}

export const createReview = (businessId, review) => {
  return $.ajax({
    method: 'post',
    url: `api/businesses/${businessId}/reviews`,
    data: {review}
  })
}

export const updateReview = (businessId, review) => {
  return $.ajax({
    method: 'patch',
    url: `api/businesses/${businessId}/reviews/${review.id}`,
    data: {review}
  })
}

export const deleteReview = reviewId => {
  return $.ajax({
    method: 'delete',
    url: `api/reviews/${reviewId}`
  })
}
