import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, ViewController, NavController, AlertController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage implements OnInit {
  public signInForm: FormGroup;
  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    public authProvider: AuthProvider,
    private fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public hasError(field, type): boolean {
    return this.signInForm.get(field).hasError(type) && (this.signInForm.get(field).touched);
  }

  public signIn() {
    const { email, password } = this.signInForm.value;
    this.authProvider.signIn(email, password).then(() => {
      this.navCtrl.setRoot('MenuPage');
    }).catch((error) => {
      this.alertCtrl.create({
        title: 'Error',
        message: error.message,
        buttons: ['Ok'],
      }).present();
    });
  }

  public closeModalPage() {
    this.viewCtrl.dismiss();
  }
}
