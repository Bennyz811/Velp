import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './business_index_item';

class Recommended extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllBusiness();
  }

  render(){
    return (
      <div className="recom-container">
            {this.props.businesses.map( biz =>
              <IndexItem
                key={biz.id}
                businesses={biz}
                />

            )}
      </div>
    );
  }
}

export default Recommended;
