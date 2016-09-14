import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterUserService } from './register.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'register-user',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    user: User;

    constructor(
        private userService: RegisterUserService,
        private router: Router) {
        this.user = new User('', '', '');
    }

    ngOnInit() { }

    register() {
        this.userService.execute(this.user);
        this.router.navigate(['']);
    }

    get isValid(): boolean{
        return true;
    }
}
