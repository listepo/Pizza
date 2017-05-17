import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  public rootPage: any = 'AuthPage';
  @ViewChild(Nav) private nav: Nav;
  public get isLoggedIn() {
    return this.authProvider.isLoggedIn;
  }
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menu: MenuController,
    public authProvider: AuthProvider,
    ) {
    platform.ready().then(() => {
      this.authProvider.afAuth.authState.subscribe(() => {
        statusBar.styleDefault();
        splashScreen.hide();
      });
    });
  }

  public openPage(page: string) {
    this.nav.setRoot(page);
  }

  public signOut() {
    this.authProvider.afAuth.auth.signOut();
  }
}
