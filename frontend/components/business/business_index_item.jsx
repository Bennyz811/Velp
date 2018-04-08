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
    // this.props.history.push(`/businesses/${this.props.business.id}`);
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

    const isSplash = this.props.splash;
    
    return <li id="myLI" className={isSplash ? "recom-list" : "search-container"}>
        <div className={isSplash ? "recom-list-large" : "biz-listing-large"}>
          <div className={isSplash ? "recom-list-left-container" : "biz-listing-left-container"}>
            <div className={isSplash ? "recom-media-block" : "biz-media-block"}>
              <div className={isSplash ? "recom-media-avatar" : "media-avatar"}>
                <img className={isSplash ? "recom-pic" : "biz-pic"} src={image_url} />
              </div>
              <div className={isSplash ? "recom-media-story" : "media-story"}>
                <Link className={isSplash ? "recom-item-title search-res-title" : "search-res-title"} to={`/businesses/search/${this.props.business.id}`}>
                  {biz_name}
                </Link>
                <div className={isSplash ? "recom-item-rating search-res-rating" : "search-res-rating"}>{ratingStar}</div>
                <div className={isSplash ? "recom-item-cat search-res-cat" : "search-res-cat"}>
                  {dollar} · {category}
                </div>
              </div>
            </div>
          </div>
          {!isSplash && <div className="biz-listing-right-container">
            <span className="search-res-neigh">{neighborhood}</span>
            <address className="search-res-addr">{address}</address>
            <span>{phone}</span>
          </div>}
        </div>
      </li>;
  }
}
export default withRouter(IndexItem);
