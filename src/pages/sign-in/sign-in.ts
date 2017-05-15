import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public viewCtrl: ViewController) {}

  public closeModalPage() {
    this.viewCtrl.dismiss();
  }
}
