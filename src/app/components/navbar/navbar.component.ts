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

  constructor(private authSrv: AuthFireService , private router: Router) {
    this.authSrv.isAuthenticated.subscribe( valor => {
      this.isAuthenticated = valor;
      if (this.isAuthenticated) {
        // Esta autenticado
        router.navigate(['/dashboard']);
      } else {
        // No esta autenticado
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
