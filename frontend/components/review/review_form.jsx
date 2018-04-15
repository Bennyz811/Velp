import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signup} from '../../actions/session_actions';
// import BusinessShow from '../business/business_show';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navToBizShow = this.navToBizShow.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  navToBizShow(){
    const url = `/businesses/search/${this.props.match.params.businessId}`;
    this.props.history.push(url);
  }

  handleSubmit(e){
    e.preventDefault();
    const bizId = parseInt(this.props.match.params.businessId);
    const review = Object.assign({}, this.state, {biz_id: bizId});
    this.props.action(review).then( () => this.navToBizShow());
  }

  // componentWillReceiveProps(newProps){
  //   this.setState(newProps.review)
  // }

  handleRating(e){
    this.setState({rating: e.target.value});
  }

  update(field){
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    const text = this.props.formType === 'write_review' ? "Post Review" : "Update Post";
    let signUpFirst;
    let signedIn;

    if (this.props.currentUser === null && this.props.formType === 'write_review'){
      signUpFirst = (
        <Link className="post-review-btn" to='/signup'>Sign Up First</Link>
      )
    } else {
      signedIn = (
        <input className="post-review-btn" type='submit' value={text}/>
      )
    }

    let stars = [];
    return (
      <div>
        <div className="review-form-container">
          <div className="review-form-header">
            <h3>Write a Review</h3>
          </div>
          <div className="review-form-form">
            <form onSubmit={this.handleSubmit}>
              <div className="stars-div">
                <i className={`fa fa-star ${stars[1]}`}></i>
                  <i className={`fa fa-star ${stars[2]}`}></i>
                    <i className={`fa fa-star ${stars[3]}`}></i>
                      <i className={`fa fa-star ${stars[4]}`}></i>
                        <i className={`fa fa-star ${stars[5]}`}></i>
                        </div>
                        <div className="star-rating">
                          <input onChange={this.handleRating} type="radio" name="star" value="1"></input>
                            <input onChange={this.handleRating} type="radio" name="star" value="2"></input>
                              <input onChange={this.handleRating} type="radio" name="star" value="3"></input>
                                <input onChange={this.handleRating} type="radio" name="star" value="4"></input>
                                  <input onChange={this.handleRating} type="radio" name="star" value="5"></input>
                                  </div>

                                  <textarea
                                    className="review-text-area"
                                    cols="30"
                                    rows="10"
                                    value={this.state.body}
                                    onChange={this.update('body')}
                                    placeholder="Your review helps others learn about great
                                    local businesses. Please don't review this business if
                                    you received a freebie for writing this review, or if you're
                                    connected in any way to the owner or employees."
                                    />
                                    {signedIn}
                                    {signUpFirst}
                                  </form>
          </div>

      </div>
      </div>
    )
  }
}

export default withRouter(ReviewForm);
