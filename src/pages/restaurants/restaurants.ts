import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  public restaurants = [
    { address: 'пр-т Перемоги, 9-б', phone: '063 356 05 93' },
    { address: 'бульв. Лесі Українки, 34', phone: '073 311 63 30' },
    { address: 'вул. Мішуги, 3-в', phone: '063 356 01 34' },
    { address: 'бульвар Вацлава Гавела, 6', phone: '073 311 63 04' },
    { address: 'пр-т Маяковського, 43/2', phone: '073 311 62 99' },
  ];
  constructor(private googleMaps: GoogleMaps) {}
  public ngAfterViewInit() {
    this.loadMap();
  }
  public loadMap() {
    const element: HTMLElement = document.getElementById('restaurants-map');

    const map: GoogleMap = this.googleMaps.create(element);

    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    map.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        console.log('Map is ready!');
        // Now you can add elements to the map like the marker
      },
    );

    // create LatLng object
    const ionic: LatLng = new LatLng(43.0741904, -89.3809802);

    // create CameraPosition
    const position: CameraPosition = {
      target: ionic,
      zoom: 18,
      tilt: 30,
    };

    // move the map's camera to position
    map.moveCamera(position);

    // create new marker
    const markerOptions: MarkerOptions = {
      position: ionic,
      title: 'Ionic',
    };

    map.addMarker(markerOptions)
      .then((addedMarker: Marker) => {
          addedMarker.showInfoWindow();
    });
  }
}
