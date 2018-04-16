import SearchContainer from './search_container';
import GreetingContainer from '../greeting/greeting_container';
import Greeting from '../greeting/greeting';
import React from 'react';
import {Link} from 'react-router-dom';
import {AuthRoute} from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';

class UniversalNav extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return <div className="main-nav-wrapper">
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
              <div>
                <GreetingContainer nav={"nav"} />
              </div>
            </div>
          </div>
      </div>;
  }
}

export default UniversalNav;
