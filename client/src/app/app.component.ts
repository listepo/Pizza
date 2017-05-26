import { Component, ViewChild } from '@angular/core';
import {
  Platform,
  Nav,
  MenuController,
  AlertController,
} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  public rootPage: any = 'MenuPage';
  @ViewChild(Nav) private nav: Nav;
  public get isLoggedIn() {
    return this.authProvider.isLoggedIn;
  }
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    public menu: MenuController,
    public authProvider: AuthProvider,
    ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.authProvider.afAuth.authState.subscribe(() => {
      if (this.authProvider.isLoggedIn) {
        this.rootPage = 'MenuPage';
      } else {
        this.rootPage = 'AuthPage';
      }
    });
  }

  public openPage(page: string) {
    this.nav.setRoot(page);
  }

  public signOut() {
    this.alertCtrl.create({
      title: 'Are you sure?',
      subTitle: 'Do you want to log out?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => { this.authProvider.afAuth.auth.signOut(); },
        },
      ],
    }).present();
  }
}
