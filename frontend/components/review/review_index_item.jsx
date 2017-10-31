import React from 'react';
import {withRouter, Link} from 'react-router-dom';

const ReviewIndexItem = ({review}) => {
  return (
    <div>
      {review.body}
      {review.rating}
    </div>
  )
}

export default withRouter(ReviewIndexItem);
