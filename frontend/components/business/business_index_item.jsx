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
    this.props.history.push(`/businesses/${this.props.business.id}`);
  }

  render(){
    const {biz_name, category, rating, cost, neighborhood, address, phone, image_url} = this.props.business;
    let ratingStar;
    const ar = this.props.business.rating;
    if (ar === 0){
      ratingStar = (
        <div className="rating-star-0"><img src={window.zeroStar}/></div>
      );
    } else if (ar === 1){
        ratingStar = (
          <div className="rating-star-1"><img src={window.oneStar}/></div>
        );
      } else if (ar === 2){
        ratingStar = (
          <div className="rating-star-2"><img src={window.twoStar}/></div>
        );
      } else if (ar === 3){
        ratingStar = (
          <div className="rating-star-3"><img src={window.threeStar}/></div>
        );
      } else if (ar === 4){
        ratingStar = (
          <div className="rating-star-4"><img src={window.fourStar}/></div>
        );
      } else if (ar === 5){
        ratingStar = (
          <div className="rating-star-5"><img src={window.fiveStar}/></div>
        );
      }

    let dollar;
    if (this.props.business.cost === 1){
      dollar = <div>$</div>;
    } else if (this.props.business.cost === 2){
      dollar = <div>$$</div>;
    } else if (this.props.business.cost === 3){
      dollar = <div>$$$</div>;
    } else if (this.props.business.cost === 4){
      dollar = <div>$$$$</div>;
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
                <div className="search-res-cat">{dollar}· {category}</div>
              </div>
            </div>
          </div>
          <div className="biz-listing-right-container">
              <span className="search-res-neigh">{neighborhood}</span>
              <address className="search-res-addr">{address}</address>
              <span>{phone}</span>
          </div>
        </div>
      </li>
    );
  }
}
export default withRouter(IndexItem);
