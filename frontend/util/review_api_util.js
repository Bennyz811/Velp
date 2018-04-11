export const fetchBusinessReviews = (revBizId, offSet) => {
  return $.ajax({
    method: 'get',
    url: 'api/reviews',
    data: {revBizId, offSet}
  });
};

export const fetchReview = id => {
  return $.ajax({
    method: 'get',
    url: `api/reviews/${id}`
  });
};

export const createReview = review => {
  return $.ajax({
    method: 'post',
    url: `api/reviews`,
    data: {review}
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: 'patch',
    url: `api/reviews/${review.id}`,
    data: {review}
  });
};

export const deleteReview = reviewId => {
  return $.ajax({
    method: 'delete',
    url: `api/reviews/${reviewId}`
  });
};
