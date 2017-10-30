import React from 'react';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';

class BusinessShow extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    if (!(this.props.business)){
      this.props.fetchBusiness(this.props.bizId);
    }
  }

  reviewButton(){

  }

  render(){
    if (this.props.business){
      const {id, biz_name, address, phone, neighborhood, category, rating, cost, hours} = this.props.business;
      return (
        <div className="biz-index-item" onClick={this.handleClick}>
          <div className="biz-index-info">
            <div>
              <span>{biz_name}</span>
              <span>{category}</span>
              <span>{cost}</span>
              <span>{rating}</span>
              <Link to='/write_review'>Write a Review</Link>
              <Link to='/upload_user_photos'>Add Photo</Link>
            </div>
            <div className='map-box'>
              <span>{address}</span>
              <span>{phone}</span>
              <Link to={`/businesses/${id}/edit`}>Edit</Link>
            </div>
            <div className='hour-summary'>
              <span>{hours}</span>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}

export default BusinessShow;
