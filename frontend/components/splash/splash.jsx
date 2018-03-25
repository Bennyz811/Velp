import React from 'react';
import {Link, withRouter, Route} from 'react-router-dom';
import SearchContainer from '../business/search_container';
import RecommendedContainer from '../business/business_recom_container';

class Splash extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
        const classes = ["tacos", "beer", "girleed_cheese", "meal", "icecream", "perse2", "xian", "steak"];
        const rand = classes[Math.floor(Math.random() * classes.length)];
        // $('background').css({'background': 'image_url(images/' + rand + ')'});
    return(
      <div>
        <div className={rand}>
            <div className="home-page-hero">
              <div className="home-page-logo">
                <Link className='logo-link' to='/'><img src={window.velpLogo}/></Link>
              </div>
                <SearchContainer className="search-bar-homepage"/>
            </div>
        </div>
        <div className="home-main-container">
          <div className="home-rec-container">
            <h2>Velp New York</h2>
          </div>
          {/* <Route exact path="/" component={RecommendedContainer}/> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
