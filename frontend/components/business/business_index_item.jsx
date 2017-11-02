import React from 'react';
import {withRouter, Link} from 'react-router-dom';
// import BusinessShowContainer from './business_show_container';
import BusinessMap from '../business_map/business_map';

class IndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.history.push(`/businesses/${this.props.business.id}`)
  }

  render(){
    const {biz_name, category, rating, neighborhood, address, phone, image_content_type} = this.props.business
    let ratingStar;
    if (!this.props.business.rating){
      ratingStar = (
        <div className="rating-star-0"></div>
      )
    } else {
      if (ratingStar === 1){
        ratingStar = (
          <div className="rating-star-1"></div>
        )
      } else if (ratingStar === 2){
        ratingStar = (
          <div className="rating-star-2"></div>
        )
      } else if (ratingStar === 3){
        ratingStar = (
          <div className="rating-star-3"></div>
        )
      } else if (ratingStar === 4){
        ratingStar = (
          <div className="rating-star-4"></div>
        )
      } else if (ratingStar === 5){
        ratingStar = (
          <div className="rating-star-5"></div>
        )
      }
    }

    return(
      <div>

        <div className="search-container">
        <ul>
          <li className="reg-search-res">
            <div>
              <Link to={`/businesses/${this.props.business.id}`}>{biz_name}</Link>
              {ratingStar}
              {category}
              {rating}
            </div>
            <div>
              {neighborhood}
              {address}
              {phone}
            </div>
          </li>
        </ul>
      </div>

      </div>
    )
  }
}
export default withRouter(IndexItem);
