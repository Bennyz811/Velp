import {connect} from 'react';
import IndexItem from './business_index';

const BusinessIndex = ({businesses}) => (
  <div>
    {
      businesses.map(business => (
        <IndexItem
          key={business.id}
          business={business} />
      )
    )}
  </div>
)

export default BusinessIndex;
