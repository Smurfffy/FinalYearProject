import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';

/*
  Generated class for the Authentication provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Authentication {
  fireAuth: any;
  constructor(public af: AngularFire) {
    af.auth.subscribe( user => {
      if (user) {
        this.fireAuth = user.auth;
        console.log(user);
      }
    });
  }

  loginUsr(newEmail: string, newPassword: string): any {
    return this.af.auth.login({
      email: newEmail,
      password: newPassword
    });
  }

  forgotPassword(email: string): any {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUsr(): any {
    return this.af.auth.logout();
  }

  createUsr(newEmail: string, newPassword: string): any {
    return this.af.auth.createUser({
      email: newEmail,
      password: newPassword
    });
  }
}
