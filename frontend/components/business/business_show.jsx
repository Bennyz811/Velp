import React from 'react';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';

class businessShow extends React.Component {
  constructor(props){
    super(props);
    // this.state = { images = [] };
  }

  renderReviewButton(){

  }

  render(){
    const {biz_name, address, phone, neighborhood, category, rating, cost} = this.props.business;
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
            <Link to={`/businesses/${business.id}/edit`}>Edit</Link>
          </div>
          <div className='hour-summary'>
            <span>{hours}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default businessShow;
