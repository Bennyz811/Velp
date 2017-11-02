import React from 'react';
import {withRouter, Link} from 'react-router-dom';
// import BusinessShowContainer from './business_show_container';
import BusinessMap from '../business_map/business_map';

class IndexItem extends React.Component {
  constructor(props){
    super(props);
    // debugger
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.history.push(`/businesses/${this.props.business.id}`)
  }

  render(){
    const {biz_name, category, rating, cost, neighborhood, address, phone, image_url} = this.props.business
    let ratingStar;
    if (!this.props.business.rating){
      ratingStar = (
        <div className="rating-star-0"><img src={window.zeroStar}/></div>
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
      <li className="search-container">
        <div className="biz-listing-large">
          <div className="biz-listing-left-container">
            <div className="biz-media-block">
              <div className="media-avatar">
                <img className="biz-pic" src={image_url}/>
              </div>
              <div className="media-story">
                <Link className="search-res-title" to={`/businesses/${this.props.business.id}`}>{biz_name}</Link>
                <div className="search-res-rating">{ratingStar}</div>
                <div className="search-res-cat">{cost} {category}</div>
              </div>
            </div>
          </div>
          <div className="biz-listing-right-container">
            <div>
              {neighborhood}
              {address}
              {phone}
            </div>
          </div>
        </div>
      </li>
    )
  }
}
export default withRouter(IndexItem);
