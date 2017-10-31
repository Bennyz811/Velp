import SearchContainer from './search_container';
import React from 'react';
import {Link} from 'react-router-dom';

class UniversalNav extends React.Component{
  render(){
    return(
      <div>
          <div className="main-nav-wrapper">
            <div className="search-bar-nav">
              <Link className="nav-home-link" to='/'><img className='main-nav-logo' src={window.velpLogo}/></Link>
              <SearchContainer className="nav-search-bar"/>
            </div>
          </div>
      </div>
    )
  }
}

export default UniversalNav;
