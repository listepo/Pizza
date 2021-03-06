import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Searchbar } from 'ionic-angular';
import { Geocoder, GeocoderResult } from '@ionic-native/google-maps';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html',
})
export class AddAddressPage {
  public searchAddress: string;
  public addresses: Observable<GeocoderResult>;
  public selectedAddress: GeocoderResult = null;
  public get isSelected() {
    return this.selectedAddress !== null;
  }
  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    public gecodoer: Geocoder,
  ) {}

  public findAddress(searchbar: Searchbar) {
    const loader = this.loadingCtrl.create();
    loader.present();
    this.addresses = Observable.fromPromise(this.gecodoer.geocode({
      address: this.searchAddress,
    })).map((addresses: GeocoderResult[]) => {
      return addresses.filter((address: GeocoderResult) => typeof address.subThoroughfare === 'string');
    }).finally(() => {
      this.selectedAddress = null;
      loader.dismiss();
      searchbar.setFocus();
    });
  }

  public onSelectAddress(address: GeocoderResult) {
    this.selectedAddress = address;
  }

  public saveAddress() {
    this.db.list('/addresses').push(this.selectedAddress);
    this.navCtrl.pop();
  }

}
