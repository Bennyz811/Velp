import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './business_index_item';
import UniversalNav from './universal_nav';
import BusinessMap from '../business_map/business_map';
import Footer from '../footer.jsx';

class BusinessIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.props.fetchAllBusiness();
    // this.props.updateFilter("category");
  }

  render(){
    return (
      <div>
        <UniversalNav />
        <div className="result-super-container">
          <div className="result-container">

            <div className="result-col-alpha">
              <div className="result-list">
                <ul id="index" className="result-list-ul">
                    {
                      this.props.businesses.map(business => (
                        <IndexItem
                          className="result-list-ind"
                          key={business.id}
                          businesses={business} />
                      ))
                    }
                </ul>
                {!this.props.businesses.length && <p className="error-msg">Sorry! There are no results matching your search. Please try another term.</p>}
              </div>
            </div>

            <div className="result-col-beta">
              <div>
                  <BusinessMap
                    businesses={this.props.businesses}
                    />
              </div>
            </div>
          </div>

      </div>
      </div>
    );
  }
}
export default BusinessIndex;
