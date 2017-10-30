import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import UniversalNav from '../business/universal_nav';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  biz_show(){
    const url = `/businesses/${this.props.match.businessId}`;
    this.props.history.push(url);
  }

  handleSubmit(e){
    e.preventDefault();
    const businessId = parseInt(this.props.match.params.businessId);
    const review = Object.assign({}, this.state, {
      business_id: businessId
    })
    this.props.createReview({review});
    this.biz_show();
  }

  update(field){
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
  }

  renderRating(){

  }

  render() {
    return (
      <div>
        <UniversalNav/>
        <form onSubmit={this.handleSubmit}><h3>Write a Review</h3>
          <textarea
            className="review-text-area"
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Your review helps others learn about great
            local businesses. Please don't review this business if
            you received a freebie for writing this review, or if you're
            connected in any way to the owner or employees." />
        </form>
        <input type='submit' value="Post Review"/>
      </div>
    )
  }
}

export default withRouter(ReviewForm);
