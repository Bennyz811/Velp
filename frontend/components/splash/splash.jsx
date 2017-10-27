import React from 'react';

class Splash extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <div className="splah-image">
          <img src={window.splash} />
        </div>
      </div>
    )
  }
}
