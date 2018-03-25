import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './business_index_item';
import UniversalNav from './universal_nav';
import BusinessMap from '../business_map/business_map';
import Footer from '../footer.jsx';
import queryString from 'query-string';
import InfiniteScroll from 'react-infinite-scroller';

class BusinessIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount(){
    // const params = queryString.parseUrl(this.props.query.searchTerm);
    // console.log(params);
    const query = (this.props.location.search).slice(1);
    this.props.searchForBusinesses({searchTerm: query});
    // this.props.updateFilter(params);
    // this.props.location.push({
    //   pathname: this.props.location.pathname,
    //   search: queryString.parseUrl(this.props.query.searchTerm).url
    // });
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUpdate(){
  }
  
  handleScroll(){
    if (this.scroller){
      console.log(`value=${this.scroller.scrollTop}`);
    }
  }

  handleClick(){
    this.props.searchForBusinesses({searchTerm: (this.props.location.search).slice(1)}, this.props.offSet);
  }

  render(){
    return <div>
        <UniversalNav />
        <div className="result-super-container">
          <div className="result-container">
            <div className="result-col-alpha">
              <div className="result-list">
              <button onClick={this.handleClick}>Button</button>
                <ul onScroll={this.handleScroll} ref={scroller => {
                    this.scroller = scroller;
                  }} id="index" className="result-list-ul">
                  {this.props.businesses.map(business => (
                    <IndexItem
                      className="result-list-ind"
                      key={business.id}
                      businesses={business}
                    />
                  ))}
                </ul>
                {!this.props.businesses.length && <p className="error-msg">
                    Sorry! There are no results matching your search. Please
                    try another term.
                  </p>}
              </div>
            </div>

            <div className="result-col-beta">
              <div className="map-container">
                <BusinessMap businesses={this.props.businesses} />
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}
export default BusinessIndex;
