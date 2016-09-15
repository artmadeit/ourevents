import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterUserService } from './register.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'register-user',
    templateUrl: 'register.component.html',
    styles: [`
        .phrase{
            color: white;
        }

        #register-user {
            background-image: url('img/knowledge.jpg');
        }

        .jumbotron.absolute-background .content {
            top: 13%;
        }

    `]
})
export class RegisterComponent implements OnInit {
    user: User;

    constructor(
        private registerUser: RegisterUserService,
        private router: Router) {
        this.user = new User('', '', '');
    }

    ngOnInit() { }

    register() {
        // TODO: only register if is valid
        this.registerUser.execute(this.user);
        this.router.navigate(['']);
    }

    get isValid(): boolean{
        return true;
    }
}
