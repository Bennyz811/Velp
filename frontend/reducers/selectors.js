import values from 'lodash/values';

export const selectBusinessReviews = (state, biz) => {
  return biz ? biz.review_ids.map(od => state.entities.review[id]) : [];
};

export const asArray = ({ businesses }) => (
  Object.keys(businesses).map(id => businesses[id])
);
