import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import UniversalNav from '../business/universal_nav';
// import BusinessShow from '../business/business_show';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navToBizShow = this.navToBizShow.bind(this);
  }

  navToBizShow(){
    const url = `/businesses/${this.props.match.params.businessId}`;
    this.props.history.push(url);
  }

  handleSubmit(e){
    // debugger
    // return(e) => {
    //   e.preventDefault();
    //   const review = Object.assign({}, this.state);
    //   this.props.createReview({review});
    //   this.navToBizShow();
    // }
    e.preventDefault();
    const bizId = parseInt(this.props.match.params.businessId);
    const review = Object.assign({}, this.state, {biz_id: bizId})
    this.props.createReview({review});
    this.navToBizShow();
  }

  update(field){
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
  }

  renderRating(){

  }

  render() {
    const text = this.props.formType === 'write_review' ? "Post Review" : "Update Post";
    return (
      <div>
        <UniversalNav/>
        <div>

        </div>
        <form onSubmit={this.handleSubmit}>
          <h3>Write a Review</h3>

        <input
          type="number"
          value={this.state.rating}
          onChange={this.update('rating')}
          />
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

          <input className="post-review-btn" type='submit' value={text}/>
        </form>

      </div>
    )
  }
}

export default withRouter(ReviewForm);