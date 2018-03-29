import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './business_index_item';
import UniversalNav from './universal_nav';
import BusinessMap from '../business_map/business_map';
import Footer from '../footer.jsx';
import throttle from 'lodash/throttle';

class BusinessIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll = throttle(this.handleScroll.bind(this), 1000);
  }
  
  componentDidMount(){
    window.scrollTo(0,0);
    const query = (this.props.location.search).slice(1);
    this.props.searchForBusinesses({searchTerm: query});
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillReceiveProps(){
  }

  handleScroll(){
    const x = document.getElementById('index');
    if (window.pageYOffset > Math.ceil(x.offsetHeight * 0.25)){
      this.props.searchForBusinesses({ searchTerm: this.props.location.search.slice(1) }, this.props.offSet);
    }
  }


  render(){
    return <div>
        <UniversalNav />
        <div className="result-super-container">
          <div className="result-container">
            <div className="result-col-alpha">
              <div className="result-list">
                <ul id="index" className="result-list-ul">
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
