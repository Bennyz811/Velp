import Search from './search';
import React from 'react';
import {Link} from 'react-router-dom';

class UniversalNav extends React.Component{
  render(){
    return(
      <div>
        <Search/>
          <div className="main-nav-wrapper">
            <Link to='/'><img className='main-nav-logo' src={window.velpLogo}/></Link>
          </div>
      </div>
    )
  }
}

export default UniversalNav;
