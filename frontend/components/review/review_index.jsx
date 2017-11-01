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
        <div>
          {
            this.props.reviews.map(rev => (
              <ReviewIndexItem
                key={rev.id}
                review={rev}/>
            ))
          }
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
