import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker,
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
  public displayType = 'map';
  public get isMapType() {
    return this.displayType === 'map';
  }
  public get isListType() {
    return this.displayType === 'list';
  }
  public restaurants = [
    { address: 'пр-т Перемоги, 9-б', phone: '063 356 05 93', location: {lat: 50.447193, lng: 30.483035} },
    { address: 'бульв. Лесі Українки, 34', phone: '073 311 63 30', location: {lat: 50.4214396, lng: 30.5445165} },
    { address: 'вул. Мішуги, 3-в', phone: '063 356 01 34', location: {lat: 50.3966242, lng: 30.6385013} },
  ];
  private map: GoogleMap;
  constructor(public googleMaps: GoogleMaps, public platform: Platform) {}

  public ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  public loadMap() {
    const element: HTMLElement = document.getElementById('restaurants-map');
    this.map = this.googleMaps.create(element);

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      this.addMarkers();
    });

    const defaultPosition: LatLng = new LatLng(50.45, 30.523333);

    const position: CameraPosition = {
      target: defaultPosition,
      zoom: 10,
      tilt: 30,
    };
    this.map.moveCamera(position);

  }

  public addMarkers() {
    for (const restaurant of this.restaurants) {
      const {lat, lng} = restaurant.location;
      const position = new LatLng(lat, lng);
      const markerOptions: MarkerOptions = {
          position,
          title: restaurant.phone,
      };
      this.map.addMarker(markerOptions);
    }
  }
}
