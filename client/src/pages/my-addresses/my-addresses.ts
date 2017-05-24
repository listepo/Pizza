import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GeocoderResult } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-my-addresses',
  templateUrl: 'my-addresses.html',
})
export class MyAddressesPage {
  public addresses: FirebaseListObservable<GeocoderResult>;
  public loader: Loading;
  constructor(
    private db: AngularFireDatabase,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
  ) {
    this.loader = this.loadingCtrl.create();
  }

  public ionViewDidLoad() {
    this.loader.present();
    this.addresses = this.db.list('/addresses');
    this.addresses.subscribe(() => this.loader.dismiss());
  }

  public removeAddress(address) {
    this.loader.present();
    this.addresses.remove(address).then(() => this.loader.dismiss());
  }

  public addAddress() {
    this.navCtrl.push('AddAddressPage');
  }

}
