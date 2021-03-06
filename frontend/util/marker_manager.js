/* global google:false */
class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
    // this.createMarkerFromBiz = this.createMarkerFromBiz.bind(this);
  }

  updateMarkers(businesses){
    const bizObj = {};
    businesses.forEach(biz => (bizObj[biz.id] = biz));
    businesses.filter(biz => !this.markers[biz.id])
    .forEach(newBiz => {
      this.createMarkerFromBiz(newBiz);});

    Object.keys(this.markers).filter(bizId => !bizObj[bizId])
    .forEach(bizId => this.removeMarker(this.markers[bizId]));
    // businesses.forEach(biz => {
    //   this.createMarkerFromBiz(biz);
    // })
  }

  createMarkerFromBiz(biz){
    // const pos = {lat: biz.lat, lng: biz.lng};
    const pos = new google.maps.LatLng(biz.lat, biz.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    // marker.setMap(this.map);
    marker.addListener('click', () => this.handleClick(biz));
    this.markers[marker.bizId] = marker;
  }

  removeMarker(marker){
    this.markers[marker.bizId].setMap(null);
    delete this.markers[marker.bizId];
  }
}

export default MarkerManager;
