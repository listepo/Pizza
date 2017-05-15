import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  constructor(public modalCtrl: ModalController) {}

  public openSignInPage() {
    this.modalCtrl.create('SignInPage').present();
  }

  public openSignUpPage() {
    this.modalCtrl.create('SignUpPage').present();
  }
}
