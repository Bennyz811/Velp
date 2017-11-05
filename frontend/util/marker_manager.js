
class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
    this.createMarkerFromBiz = this.createMarkerFromBiz.bind(this);
  }

  updateMarkers(businesses){
    // debugger
    const bizObj = {};
    businesses.forEach(biz => bizObj[biz.id] = biz);

    businesses.filter(biz => !this.markers[biz.id])
              .forEach(newBiz => this.createMarkerFromBiz(newBiz, this.handleClick))

    Object.keys(this.markers).filter(bizId => !bizObj[bizId])
                             .ForEach(bizId => this.removeMarker(this.markers[bizId]))
  }

  createMarkerFromBiz(biz){
    const pos = new google.maps.LatLng(biz.lat, biz.lng);
    const marker = new google.maps.Marker({
      pos,
      map: this.map,
      bizId: biz.id
    });

    marker.addListener('click', () => this.handleClick(biz));
    this.markers[marker.bizId] = marker;
  }

  removeMarker(marker){
    this.markers[marker.bizId].setMap(null);
    delete this.markers[marker.bizId];
  }
}

export default MarkerManager;
