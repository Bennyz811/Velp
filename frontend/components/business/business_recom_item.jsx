import React from 'react';
import {withRouter, Link} from 'react-router-dom';
// import BusinessShowContainer from './business_show_container';
import BusinessMap from '../business_map/business_map';

class RecomItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    this.props.history.push(`/businesses/search/${this.props.business.id}`);
  }

  render(){
    const {biz_name, category, rating, cost, neighborhood, address, phone, image_url} = this.props.businesses;
    let ratingStar;
    const ar = this.props.businesses.rating;
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
    if (this.props.businesses.cost === 1){
      dollar = <div>$</div>;
    } else if (this.props.businesses.cost === 2){
      dollar = <div>$$</div>;
    } else if (this.props.businesses.cost === 3){
      dollar = <div>$$$</div>;
    } else if (this.props.businesses.cost === 4){
      dollar = <div>$$$$</div>;
    }

    return(
      <li id="myLI" className="recom-list">
        <div className="recom-listing-large">
          <div className="recom-listing-left-container">
            <div className="recom-media-block">
              <div className="recom-media-avatar">
                <img className="recom-pic" src={image_url}/>
              </div>
              <div className="recom-media-story">
                <Link className="recom-item-title search-res-title" to={`/businesses/search/${this.props.businesses.id}`}>{biz_name}</Link>
                <div className=" recom-item-rating search-res-rating">{ratingStar}</div>
                <div className=" recom-item-cat search-res-cat">{dollar} · {category}</div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
export default withRouter(RecomItem);
