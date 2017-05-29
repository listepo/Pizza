import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IonicPage,
  ViewController,
  NavController,
  AlertController,
  LoadingController,
  Loading,
} from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {
  public profileForm: FormGroup;
  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private fb: FormBuilder,
    public authProvider: AuthProvider,
  ) {
  }

  public ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    const loader = this.loadingCtrl.create();
    loader.present();
    this.authProvider.afAuth.authState.subscribe((user) => {
      this.profileForm.setValue({
        name: user.displayName,
        email: user.email,
      });
      loader.dismiss();
    });
  }
  // TODO: replace on ngxErrors
  public hasError(field, type): boolean {
    return this.profileForm.get(field).hasError(type) && (this.profileForm.get(field).touched);
  }

  public updateProfile() {
    let promise = null;
    const currentUser = this.authProvider.currentUser;
    const { email, name } = this.profileForm.value;
    const promises = [];
    promise = currentUser.updateProfile({
      displayName: name,
      photoURL: null,
    });
    promises.push(promise);
    if (email !== currentUser.email) {
      promise = currentUser.updateEmail(email);
      promises.push(promise);
    }
    const loader = this.loadingCtrl.create();
    loader.present();
    Promise.all(promise).then(() => loader.dismiss());
  }
}
