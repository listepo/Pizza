import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IonicPage,
  ViewController,
  NavController,
  AlertController,
  LoadingController,
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
  ) {}

  public ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  // TODO: replace on ngxErrors
  public hasError(field, type): boolean {
    return this.profileForm.get(field).hasError(type) && (this.profileForm.get(field).touched);
  }

  public updateProfile() {}
}
