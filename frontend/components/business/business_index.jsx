import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './business_index_item';
import UniversalNav from './universal_nav';

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
      </div>
    )
  }
}
export default BusinessIndex;
