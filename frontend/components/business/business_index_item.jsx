import React from 'react';
import {withRouter} from 'react-router-dom';
// import BusinessShowContainer from './business_show_container';

class IndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.history.push(`/businesses/${this.props.business.id}`)
  }

  render(){
  }
}
export default withRouter(IndexItem);
