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
    let date = review.created_at.slice(0,10);
  return (
      <li className="review-list">
        <div className="rev-reviews">
          <div className="rev-sidebar">
            <div className="media-avatar">
              <img className="rev-user-pic" src={review.user.imageUrl}/>
            </div>
            <div className="media-story">
              <div className="rev-user-name">
                {review.user.firstName}
                {review.user.lastName}
              </div>
            </div>
          </div>
          <div className="rev-wrapper">
            <div className="rev-content">
              <div className="rev-rating">
                <div>{ratingStar}</div>
                <span>{date}</span>
              </div>
              {review.body}
            </div>
          </div>
        </div>
      </li>
  );
};

export default withRouter(ReviewIndexItem);
