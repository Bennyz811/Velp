import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import UniversalNav from '../business/universal_nav';
import {signup} from '../../actions/session_actions';
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
    e.preventDefault();
    const bizId = parseInt(this.props.match.params.businessId);
    const review = Object.assign({}, this.state, {biz_id: bizId})
    this.props.action(review).then( () => this.navToBizShow());
  }

  // componentWillReceiveProps(newProps){
  //   this.setState(newProps.review)
  // }

  update(field){
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
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
            connected in any way to the owner or employees."
            />
          {signedIn}
          {signUpFirst}
        </form>

      </div>
    )
  }
}

export default withRouter(ReviewForm);
