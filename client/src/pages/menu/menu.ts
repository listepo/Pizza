import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public db: AngularFireDatabase,
  ) {
    this.pizzaList = this.db.list('/pizza');
  }

}
