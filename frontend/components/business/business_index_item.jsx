import React from 'react';
import {withRouter} from 'react-router-dom';
import BusinessShowContainer from './business_show_container';

class IndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.history.push(`/businesses/${this.props.business.id}`)
  }

  render(){
    const {biz_name, address, phone, neighborhood, category, rating, cost} = this.props.business;
    return (
      <div className="biz-index-item" onClick={this.handleClick}>
        <div className="biz-index-info">
          <span>{biz_name}</span>
        </div>
      </div>
    )
  }
}
export default withRouter(IndexItem);
