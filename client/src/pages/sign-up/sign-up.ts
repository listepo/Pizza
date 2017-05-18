import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, ViewController, NavController, AlertController, LoadingController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage implements OnInit {
  public signUpForm: FormGroup;
  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public authProvider: AuthProvider,
    private fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // TODO: replace on ngxErrors
  public hasError(field, type): boolean {
    return this.signUpForm.get(field).hasError(type) && (this.signUpForm.get(field).touched);
  }

  public signUp() {
    const { name, email, password } = this.signUpForm.value;
    const loader = this.loadingCtrl.create();
    loader.present();
    this.authProvider.signUp(name, email, password).then(() => {
      loader.dismiss();
      this.navCtrl.setRoot('MenuPage');
    }).catch((error) => {
      loader.dismiss();
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
