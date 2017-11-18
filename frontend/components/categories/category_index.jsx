import React from 'react';
import {Link} from 'react-router-dom';
import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Link to="businesses/search"></Link>
      </div>
    );
  }
}

export default CategoryIndex;
