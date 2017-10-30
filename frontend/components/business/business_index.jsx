import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './business_index_item';

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
        <div className="main-nav-wrapper">
          <Link to='/'><img className='main-nav-logo' src={window.velpLogo}/></Link>
        </div>
        {
          this.props.businesses.map(business => (
            <IndexItem
              key={business.id}
              business={business} />
          ))
        }
      </div>
    )
  }
}
export default BusinessIndex;
