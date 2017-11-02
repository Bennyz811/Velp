import React from 'react';
import {Link} from 'react-router-dom';

const PRICE = {
  1: "$",
  2: "$$",
  3: "$$$",
  4: "$$$$"
}

class RecBusiness extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.history.push(`/businesses/${this.props.business.id}`);
  }

  render(){

  }
}
