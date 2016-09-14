import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  user: User;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
    this.user = new User('', '', '');
  }

  login() {
    if (this.authService.login(this.user)) {
      this.router.navigate(['/']);
    } else {
      this.errorMessage = `Lo sentimos, OurEvents no 
                renoce a un usuario para esas credenciales.`;
    }
  }

  logout() {
    this.authService.logout();
  }
};
