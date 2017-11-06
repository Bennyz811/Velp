import React from 'react';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';
import UniversalNav from './universal_nav';
import ReviewFormContainer from '../review/review_form_container';
import ReviewIndexItem from '../review/review_index_item';
import ReviewIndexContainer from '../review/review_index_container';
import BusinessMap from '../business_map/business_map'


class BusinessShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.bizId)
  }

  // componentWillReceiveProps(nextProps){
  //   if (this.props.match.params.businessId)
  // }

  render(){
    let ratingStar;
    if (this.props.business){
      const ar = this.props.business.rating
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
    }

    let dollar;
    if (this.props.business){
      if (this.props.business.cost === 1){
        dollar = <div>$</div>
      } else if (this.props.business.cost === 2){
        dollar = <div>$$</div>
      } else if (this.props.business.cost === 3){
        dollar = <div>$$$</div>
      } else if (this.props.business.cost === 4){
        dollar = <div>$$$$</div>
      }
    }

    if (this.props.business && this.props.business.review_ids){
      const {id, biz_name, address, phone, neighborhood, category, rating, cost, hours} = this.props.business;
      return (
        <div className="biz-index-item" onClick={this.handleClick}>
          <UniversalNav />
          <div className="top-shelf-container">
            <div className="top-shelf">

              <div className="biz-content-container">

                <div className="biz-page-header">
                  <div className="biz-page-header-left">
                    <div className="biz-show-title">
                      <Link to={`/businesses/${this.props.business.id}`}><h1>{biz_name}</h1></Link>
                    </div>

                    <div className="biz-show-cost">
                      <div className="biz-show-rating">{ratingStar}</div>
                      <div className="biz-dol-cat">
                        <span className="biz-dollar">{dollar}</span>
                        <span className="breaker-dot">·</span>
                        <span className="biz-cat">{category}</span>
                      </div>
                    </div>

                  </div>
                  <div className="biz-page-header-right">

                    <div className="review-button">
                      <Link to={`/${this.props.business.id}/write_review`}>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        Write a Review
                      </Link>
                    </div>

                    <Link to='/upload_user_photos'>Add Photo</Link>
                  </div>
                </div>

                <div className='map-box'>
                  <div className="mapbox-map"><BusinessMap

                    />
                  </div>
                  <address>{address}</address>
                  <span>{phone}</span>
                </div>
                <div className='hour-summary'>
                  <span>{hours}</span>
                </div>
              </div>

            </div>
          </div>
        <div className="bottom-layout">
          <ReviewIndexContainer />
        </div>
        </div>
      )
    } else {
      return (
        <div>
          <UniversalNav/>
          <p>Loading...</p>
        </div>
      )
    }
  }
}

export default BusinessShow;
