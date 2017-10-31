import SearchContainer from './search_container';
import React from 'react';
import {Link} from 'react-router-dom';

class UniversalNav extends React.Component{
  render(){
    return(
      <div>
          <div className="main-nav-wrapper">
            <SearchContainer />
            <Link to='/'><img className='main-nav-logo' src={window.velpLogo}/></Link>
          </div>
      </div>
    )
  }
}

export default UniversalNav;
