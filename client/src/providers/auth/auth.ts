import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
  private user: firebase.User;
  public get currentUser(): firebase.User {
    return this.user;
  }
  public get isLoggedIn(): boolean {
    return this.user !== null;
  }
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => this.user = user);
  }
  public signIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  public signUp(name: string, email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user: firebase.User) => {
      return user.updateProfile({
        displayName: name,
        photoURL: null,
      });
    });
  }
}
