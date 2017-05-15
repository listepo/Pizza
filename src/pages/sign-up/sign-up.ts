import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public viewCtrl: ViewController) {
  }

  public closeModalPage() {
    this.viewCtrl.dismiss();
  }
}
