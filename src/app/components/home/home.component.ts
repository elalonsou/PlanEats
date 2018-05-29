import { Component, OnInit } from '@angular/core';
import { AuthFireService } from '../../services/auth-fire.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  viewSigIn = true;
  msgError = '';

  oCreate = {
    emailCreate: '',
    pswCreate1: '',
    pswCreate2: ''
  };

  oSigIn = {
    emailSigIn: '',
    pswSigIn: ''
  };

  constructor(private authSrv: AuthFireService) {
    // if (this.authSrv.isAuthenticated()) {
    //   this.router.navigate(['/dashboard']);
    // }

  }

  ngOnInit() {

  }

  signInWithGoogle() {
    this.authSrv.signInWithGoogle().then((datos) => {
      // console.log('Logueo');
      // console.log(datos);
      // this.router.navigate(['/dashboard']);
    }).catch((error) => {
      this.handleError(error);
    }) ;
  }

  createEmailUser() {
    console.log(this.oCreate.emailCreate + ' ' + this.oCreate.pswCreate1);
    this.authSrv.createUserWithEmail(this.oCreate.emailCreate, this.oCreate.pswCreate1).then(() => {
      // this.msgError = 'Creado Usuario';
    }).catch((error) => {
      this.handleError(error);
    }) ;
  }

  signInWithEmail() {
    console.log(this.oSigIn.emailSigIn + ' ' + this.oSigIn.pswSigIn);
    this.authSrv.signInWithEmail(this.oSigIn.emailSigIn, this.oSigIn.pswSigIn).then(() => {
      // this.router.navigate(['/dashboard']);
    }).catch((error) => {
      this.handleError(error);
    }) ;
  }

  signOut() {
    this.authSrv.signOut().then(() => {
      this.msgError = '';
    }).catch((error) => {
      this.handleError(error);
    }) ;
  }

  handleError(error: any) {
    console.log(error);
    console.error('Error al loguear ' + error.code + ' - ' +  error.message);
    this.msgError = error.message;
  }

  cambiarVision() {
    this.viewSigIn = !this.viewSigIn;
    this.msgError = '';

    this.oCreate.emailCreate = '';
    this.oCreate.pswCreate1 = '';
    this.oCreate.pswCreate2 = '';

    this.oSigIn.emailSigIn = '';
    this.oSigIn.pswSigIn = '';
  }
}
