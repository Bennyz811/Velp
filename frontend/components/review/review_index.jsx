import React from 'react';
import {Link} from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllReviews();
  }

  render(){
    return (
      <div>
        REVIEWSSSSSSSSS
      </div>
    )
  }
}

export default ReviewIndex
