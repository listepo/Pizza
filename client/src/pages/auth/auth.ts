import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  constructor(private navCtrl: NavController) {}

  public openSignInPage() {
    this.navCtrl.push('SignInPage');
  }

  public openSignUpPage() {
    this.navCtrl.push('SignUpPage');
  }
}
