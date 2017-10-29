import React from 'react';
import {withRouter, Link} from 'react-router-dom';
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
    const {biz_name, category, rating, neighborhood, address, phone} = this.props.business
    return(
      <div>
        <ul>
          <li className="reg-search-res">
            <div>
              <Link to={`/businesses/${this.props.business.id}`}>{biz_name}</Link>
              {category}
              {rating}
            </div>
            <div>
              {neighborhood}
              {address}
              {phone}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default withRouter(IndexItem);
