import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './business_index_item';
import RecomItem from './business_recom_item';

class Recommended extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllBusiness();
  }

  render(){
    return (
      <div id="recom" className="recom-container">
          {this.props.businesses.map( biz =>
            <RecomItem
              key={biz.id}
              businesses={biz}
              />
          )}
      </div>
    );
  }
}

export default Recommended;
