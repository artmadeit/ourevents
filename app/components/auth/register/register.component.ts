import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterUserService } from './register.service';

@Component({
    moduleId: module.id,
    selector: 'register-user',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    user: User;

    constructor(private userService: RegisterUserService) {
        this.user = {
            name: '',
            email: '',
            password: ''
        };
    }

    ngOnInit() { }

    register(){
        this.userService.execute(this.user);
    }
}