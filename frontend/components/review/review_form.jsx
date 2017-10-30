import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllReviews();
  }

  update(field){
    return (e) => this.state({
      [field]: e.currentTarget.value
    })
  }

  renderRating(){

  }
  
  render() {
    return (
      <div>

      </div>
    )
  }
}
