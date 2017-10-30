import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class ReviewIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        {this.props.review}
      </div>
    )
  }
}

export default withRouter(ReviewIndexItem);
