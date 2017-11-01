import React from 'react';
import ReactDOM from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class BusinessMap extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const mapOptions = {
      center: {lat: 40.7128, lng: 74.0060},
      zoom: 13
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render(){
    return (
      <div className="biz-map" ref={map => this.mapNode = map}>

      </div>
    )
  }
}

export default BusinessMap;
