import React from 'react';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';

const businessShow = ({business, businessId, fetchBusiness}) => {
  const biz = {[businessId]: business};

  return (
    <div className="biz-show">

    </div>
  )
}

export default businessShow;
