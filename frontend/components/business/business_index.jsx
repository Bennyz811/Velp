import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './business_index_item';

class BusinessIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.businesses
  }

  componentDidMount(){
    this.props.fetchAllBusiness();
  }

  render(){
    debugger
    return (
      <div>
        {
          this.props.businesses.map(business => (
            <BusinessIndexItem
              key={business.id}
              business={business} />
          ))
        }
      </div>
    )
  }
}
export default BusinessIndex;
