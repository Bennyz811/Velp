/* global google:false */
import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {lat: 40.7209, lng: -73.9980},
  zoom: 11
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class BusinessMap extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    if (this.props.business){
      this.props.fetchBusiness(this.props.businessId);
    }else {
      this.registerListener();
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  componentDidUpdate(){
    if (this.props.business){
      const targetBizId = Object.keys(this.props.business)[0];
      const targetBiz = this.props.business[targetBizId];
      this.MarkerManager.updateMarkers([targetBiz]);
    } else {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  handleMarkerClick(business){
    this.props.history.push(`businesses/${business.id}`);
  }

  handleClick(coord){
    this.props.history.push({
      pathname: 'businesses/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  registerListener(){
    google.maps.event.addListener(this.map, 'idle', ()=>{
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: {lat: north, lng: east},
        southWest: {lat: south, lng: west}
      };
      // this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  render(){
    return (
      <div className="biz-map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(BusinessMap);
