import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './business_index_item';
import UniversalNav from './universal_nav';
import BusinessMap from '../business_map/business_map';
class BusinessIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllBusiness();
  }

  render(){
    return (
      <div>
        <UniversalNav />
        <div className="result-container">

        <div className="result-col-alpha">
          <div className="result-list">
            {
              this.props.businesses.map(business => (
                <IndexItem
                  className="result-list-ind"
                  key={business.id}
                  business={business} />
              ))
            }
          </div>
        </div>

        <div className="result-col-beta">
          <div>
            <BusinessMap className="biz-idx-map"/>
          </div>
        </div>

      </div>
      </div>
    )
  }
}
export default BusinessIndex;
