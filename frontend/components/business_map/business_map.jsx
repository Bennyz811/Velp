import React from 'react';
import ReactDOM from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const mapOptions = {
      center: {lat: 40.7209, lng: -73.9980},
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.business){
      this.props.fetchBusiness(this.props.businessId);
    }else {
      this.registerListener();
      // this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  componentDidUpdate(){
    if (this.props.business){
      const targetBizId = Object.keys(this.props.businesses)[0];
      const targetBiz = this.props.businesses[targetBizId];
      this.MarkerManager.updateMarkers([targetBiz]);
    // } else {
      // this.MarkerManager.updateMarkers(this.props.businesses);
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
    const getCoordsObj = latLng => ({
      lat: latLng.lat(),
      lng: latLng.lng()
    });
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
    })
  }

  render(){
    return (
      <div className="biz-map" ref={map => this.mapNode = map}>
        Map
      </div>
    )
  }
}

export default withRouter(BusinessMap);
