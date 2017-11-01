import React from 'react';
import ReactDOM from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class BusinessMap extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const mapOptions = {
      center: {lat: 40.7209, lng: -73.9980},
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
