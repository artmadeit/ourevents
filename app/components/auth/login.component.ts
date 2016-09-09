import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user: User;

  constructor(private authService: AuthService, private router: Router) {
    this.user = {
      email: '',
      password: ''
    };
  }

  login() {
    this.authService.login(this.user).subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/']);
      } else {
        alert("intentalo otra vez");
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}