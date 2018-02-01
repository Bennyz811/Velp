import SearchContainer from './search_container';
import GreetingContainer from '../greeting/greeting_container';
import React from 'react';
import {Link} from 'react-router-dom';
import {AuthRoute} from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';

class UniversalNav extends React.Component{
  render(){
    return <div className="main-nav-wrapper">
        <div className="uni-search-container">
          <div className="search-bar-nav">
            <div className="uni-arr-container">
              <div className="uni-logo">
                <Link className="nav-home-link" to="/">
                  <img className="main-nav-logo" src={window.velpLogo} />
                </Link>
              </div>
              <div className="nav-search-bar">
                <SearchContainer />
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default UniversalNav;
