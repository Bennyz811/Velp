import React from 'react';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';
import UniversalNav from './universal_nav';
import ReviewFormContainer from '../review/review_form_container';

import ReviewIndexItem from '../review/review_index_item';
import ReviewIndexContainer from '../review/review_index_container';

class BusinessShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (!(this.props.business)){
      this.props.fetchBusiness(this.props.bizId).then(business => {
        return business.business.review_ids.forEach(id => (this.props.fetchReview(id)));
      })
    } else {
      this.props.business.review_ids.forEach(id => (this.props.fetchReview(id)))
    }
  }

  // componentWillReceiveProps(nextProps){
  //   if (this.props.match.params.businessId)
  // }

  reviewButton(){

  }

  render(){

    if (this.props.business){
      const {id, biz_name, address, phone, neighborhood, category, rating, cost, hours} = this.props.business;
      return (
        <div className="biz-index-item" onClick={this.handleClick}>
          <UniversalNav />
          <div className="biz-content-container">
            <div className="biz-page-header">
              <div className="biz-page-header-left">
                <Link to={`/businesses/${this.props.business.id}`}><h1>{biz_name}</h1></Link>
                <span>{category}</span>
                <span>{cost}</span>
                <span>{rating}</span>
              </div>
              <div className="biz-page-header-right">
                <Link className="review-button" to={`/${this.props.business.id}/write_review`}>Write a Review</Link>
                <Link to='/upload_user_photos'>Add Photo</Link>
              </div>
            </div>
            <div className='map-box'>
              <span>{address}</span>
              <span>{phone}</span>
            </div>
            <div className='hour-summary'>
              <span>{hours}</span>
            </div>
            <div>
              <ReviewIndexContainer />
            </div>
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
