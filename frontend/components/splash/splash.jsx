import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Splash extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
        // let images = ['tacos.jpg', 'beer.jpg'];
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
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(Splash);
