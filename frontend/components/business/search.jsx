import React from 'react';
import BusinessMap from '../business_map/business_map';
import BusinessIndex from './business_index';

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value})
    };
  }

  render(){
    return(
      <div>
        <div className='search-bar'>
          <input type="submit" value="Find"/>
        </div>
      </div>
    )
  }

}

export default Search;
