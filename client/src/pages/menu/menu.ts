import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public pizzaList: FirebaseListObservable<any>;
  constructor(
    private db: AngularFireDatabase,
    private loadingCtrl: LoadingController,

  ) {}

  public ionViewDidLoad() {
    const loader = this.loadingCtrl.create();
    loader.present();
    this.pizzaList = this.db.list('/pizza');
    this.pizzaList.subscribe(() => loader.dismiss());
  }

}
