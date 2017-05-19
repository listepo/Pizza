import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geocoder } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html',
})
export class AddAddressPage {
  public address: string;
  constructor(public navCtrl: NavController, public gecodoer: Geocoder) {}

  public findAddress() {
    console.log(this.address);
    this.gecodoer.geocode({
      address: this.address,
    }).then((data) => {
      console.log(data);
    });
  }

}
