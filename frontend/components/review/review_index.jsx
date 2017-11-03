import React from 'react';
import {Link} from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.fetchAllReviews();
  // }
  render(){
    if (this.props.reviews.length){
      return (
        <div className="rev-super-container">
          <div className="rev-container">
            <div className="rev-column-alpha">
              <div className="rev-feed">
                <div className="rev-feed-header">
                  <h2>Recommended Reviews</h2>
                </div>
                <ul className="rev-list-ul">
                  {
                    this.props.reviews.map(rev => (
                      <ReviewIndexItem
                        className="reviews-ind"
                        key={rev.id}
                        review={rev}/>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="rev-column-beta">

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

export default ReviewIndex
