import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, Observer, Subject } from 'rxjs';
import { promise } from 'protractor';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthFireService {

    public usr: User;

    public isAuthenticated = new Subject<boolean>();

    // public logueadoObserver: Observer<boolean>;

    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;

    constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
          _firebaseAuth.auth.useDeviceLanguage();
          this.user = _firebaseAuth.authState;

          // this.logueado = Observable.create(this.logueadoObserver);

          this.user.subscribe(
            (user) => {
              if (user) {
                this.userDetails = user;
                this.usr = new User();
                this.usr.displayName = this.userDetails.displayName;
                this.usr.email = this.userDetails.email;
                this.usr.emailVerified = this.userDetails.emailVerified;
                this.usr.photoURL = this.userDetails.photoURL;
                this.usr.uid = this.userDetails.uid;
                this.isAuthenticated.next(true);
                // this.userData = usr;
                console.log('Con Usuario');
                console.log(this.userDetails);
              } else {
                this.isAuthenticated.next(false);
                this.userDetails = null;
                this.usr = null;
                console.log('Sin Usuario');
                console.log( this.userDetails);
              }
            }
          );
    }

  signInWithGoogle(): Promise<any> {
      return this._firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
    );
  }

    // signInWithEmail(email: string, pass: string) {
    //   this._firebaseAuth.auth.signInWithEmailAndPassword(email, pass).catch((error) => {
    //     // Handle Errors here.
    //     // var errorCode = error.code;
    //     // var errorMessage = error.message;
    //     console.error(error.message);
    //     // ...
    //   });
    // }

    // signInWithEmail(email: string, pass: string) {
    //   this._firebaseAuth.auth.signInWithEmailAndPassword(email, pass).catch((error) => {
    //     // Handle Errors here.
    //     // var errorCode = error.code;
    //     // var errorMessage = error.message;
    //     console.error(error.message);
    //     // ...
    //   });
    // }

    signInWithEmail(email: string, pass: string): Promise<any> {
      return this._firebaseAuth.auth.signInWithEmailAndPassword(email, pass);
    }

    createUserWithEmail(email: string, pass: string): Promise<any> {
      return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, pass);
    }

    signOut(): Promise<any> {
      return this._firebaseAuth.auth.signOut();
    }

    // isAuthenticated(): boolean {
    //   console.log('Mirando Autenticacion');
    //   if (this.userDetails) {
    //     console.log('isAuthenticated=true');
    //     return true;
    //   } else {
    //     console.log('isAuthenticated=falso');
    //     return false;
    //   }
    // }

    // private handleError(error: HttpErrorResponse) {
    //   if (error.error instanceof ErrorEvent) {
    //     // A client-side or network error occurred. Handle it accordingly.
    //     console.error('An error occurred:', error.error.message);
    //   } else {
    //     // The backend returned an unsuccessful response code.
    //     // The response body may contain clues as to what went wrong,
    //     console.error(
    //       `Backend returned code ${error.status}, ` +
    //       `body was: ${error.error}`);
    //   }
    //   // return an ErrorObservable with a user-facing error message
    //   return new ErrorObservable(
    //     'Ha ocurrido un error; por favor intentelo mas tarde.');
    // }



}
