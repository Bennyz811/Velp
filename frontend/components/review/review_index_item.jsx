import React from 'react';
import {withRouter, Link} from 'react-router-dom';

const ReviewIndexItem = ({review}) => {
  let ratingStar;
  const ar = review.rating
  if (ar === 0){
    ratingStar = (
      <div className="rating-star-0"><img src={window.zeroStar}/></div>
    )
  } else if (ar === 1){
      ratingStar = (
        <div className="rating-star-1"><img src={window.oneStar}/></div>
      )
    } else if (ar === 2){
      ratingStar = (
        <div className="rating-star-2"><img src={window.twoStar}/></div>
      )
    } else if (ar === 3){
      ratingStar = (
        <div className="rating-star-3"><img src={window.threeStar}/></div>
      )
    } else if (ar === 4){
      ratingStar = (
        <div className="rating-star-4"><img src={window.fourStar}/></div>
      )
    } else if (ar === 5){
      ratingStar = (
        <div className="rating-star-5"><img src={window.fiveStar}/></div>
      )
    }
  return (
      <li>
        <div className="rev-reviews">
          <div className="rev-sidebar">
            <div className="media-avatar">
              <img className="rev-user-pic" src={review.imageUrl}/>
            </div>
            <div className="media-story">
              <div className="rev-user-name">
                {review.firstName}
                {review.lastName}
              </div>
            </div>
          </div>
          <div className="rev-wrapper">
            <div className="rev-content">
              <div className="rev-rating">{ratingStar}</div>
              {review.body}
            </div>
          </div>
        </div>
      </li>
  )
}
// pulled user through review in back end jbuilder
export default withRouter(ReviewIndexItem);
