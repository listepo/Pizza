import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-addresses',
  templateUrl: 'my-addresses.html',
})
export class MyAddressesPage {

  constructor(public navCtrl: NavController) {}

  public addAddress() {
    this.navCtrl.push('AddAddressPage');
  }

}
