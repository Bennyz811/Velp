import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Splash extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <div className="splash-image">
          <div className="home-page-hero">
            <div className="home-page-logo">
              <Link className='logo-link' to='/'><img src={window.velpLogo}/></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Splash);
