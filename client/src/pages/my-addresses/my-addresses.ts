import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GeocoderResult } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-my-addresses',
  templateUrl: 'my-addresses.html',
})
export class MyAddressesPage {
  public addresses: FirebaseListObservable<GeocoderResult>;
  constructor(private db: AngularFireDatabase, public navCtrl: NavController) {
    this.addresses = this.db.list('/addresses');
  }

  public addAddress() {
    this.navCtrl.push('AddAddressPage');
  }

}
