export const selectBusiness = ({ businesses, id}) => {
  const business = businesses[id] || {};
  return business
};

export const asArray = ({ businesses }) => (
  Object.keys(businesses).map(id => businesses[id])
);
