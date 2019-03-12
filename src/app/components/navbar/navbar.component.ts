import { User } from './../../models/user';
import { Router } from '@angular/router';
import { AuthFireService } from './../../services/auth-fire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean;
  usr: User = null;

  constructor(private authSrv: AuthFireService , private router: Router) {
    this.authSrv.isAuthenticated.subscribe( valor => {
      console.log('Autenticacion subscribe: ' + valor);
      this.isAuthenticated = valor;
      if (this.isAuthenticated) {
        // Esta autenticado
        this.usr = this.authSrv.usr;
        router.navigate(['/dashboard']);
      } else {
        // No esta autenticado
        this.usr = null;
        router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
  }

  signOut() {
    this.authSrv.signOut();
    this.router.navigate(['/home']);
  }
}
