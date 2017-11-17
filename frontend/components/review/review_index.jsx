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
            <div className="rev-col-alpha">
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
            <div className="rev-col-beta">
              <div className="bordered-rails">
                <div className="hours-operation">
                  <h3>Hours</h3>
                  <div className="simple-hour-op">
                    <table>
                      <tbody>
                        <tr>
                          <th scope="row">Mon</th>
                            <td>
                              <span>7:00 am</span> - <span>12:00 am</span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Tue</th>
                                <td>
                                  <span>7:00 am</span> - <span>12:00 am</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Wed</th>
                                    <td>
                                      <span>7:00 am</span> - <span>12:00 am</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Thu</th>
                                        <td>
                                          <span>7:00 am</span> - <span>12:00 am</span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Fri</th>
                                            <td>
                                              <span>7:00 am</span> - <span>12:00 am</span>
                                              </td>
                                            </tr>
                                            <tr>
                                              <th scope="row">Sat</th>
                                                <td>
                                                  <span>7:00 am</span> - <span>12:00 am</span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <th scope="row">Sun</th>
                                                    <td>
                                                      <span>7:00 am</span> - <span>12:00 am</span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                    </table>
                  </div>
                </div>
                <div className="more-biz-info">
                  <h3>More business info</h3>
                  <ul>
                    <li><span>Takes Reservation</span><p>Yes</p></li>
                    <li><span>Delivery</span><p>Yes</p></li>
                    <li><span>Take-out</span><p>Yes</p></li>
                    <li><span>Accepts Credit Card</span><p>Yes</p></li>
                    <li><span>Parking</span><p>Yes</p></li>
                    <li><span>Bike Parking</span><p>Yes</p></li>
                    <li><span>Hover Craft Parking</span><p>Maybe</p></li>
                    <li><span>Portal Gun Storage</span><p>No</p></li>
                    <li><span>Alcohol</span><p>Yes</p></li>
                    <li><span>Wi-Fi</span><p>Yes</p></li>
                    <li><span>Rodents</span><p>Yes</p></li>
                    <li><span>Attire</span><p>Yes</p></li>
                    <li><span>Dancing</span><p>Yes</p></li>
                    <li><span>Plombus</span><p>Yes</p></li>
                    <li><span>Music</span><p>Yes</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <p>Loading...</p>
      );
    }
  }
}

export default ReviewIndex;
