import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from './register.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationMessagesService, MessageBag } from 'ng2-custom-validation';

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
    errorMessage: string;
    userForm: FormGroup;
    errors: MessageBag;

    constructor(
        private registerUser: RegisterUserService,
        private router: Router,
        private formBuilder: FormBuilder,
        private validationMessagesService: ValidationMessagesService) {
        this.buildForm();
    }

    ngOnInit() { }

    private buildForm() {
        this.userForm = this.formBuilder.group(
            {
                'name': ['', [
                    Validators.required,
                    Validators.maxLength(50)
                ]],
                'email': ['', [
                    Validators.required,
                    Validators.maxLength(50)
                ]],
                'password': ['', [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(50)
                ]]
            });

        this.userForm.valueChanges
            .subscribe(data => {
                this.seeForErrors();
            });
        this.seeForErrors(); // (re)set validation messages now
    }

    private seeForErrors() {
        this.validationMessagesService
            .build(this.userForm)
            .subscribe((errors: MessageBag) => this.errors = errors);
    }

    register() {
        // FIXME: only register if is valid
        this.registerUser.execute(this.userForm.value);
        this.router.navigate(['']);
    }
}
