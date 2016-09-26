import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationMessagesService, MessageBag } from 'ng2-custom-validation';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit{
  errorMessage: string;
  userForm: FormGroup;
  errors: MessageBag;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private validationMessagesService: ValidationMessagesService) {
  }

  ngOnInit(): void {
      this.buildForm();
  }

  private buildForm() {
    this.userForm = this.formBuilder.group(
      {
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

  login() {
    if (this.authService.auth(this.userForm.value)) {
      this.router.navigate([this.authService.redirectURL]);
    } else {
      this.errorMessage = `Lo sentimos, OurEvents no 
                renoce a un usuario para esas credenciales.`;
    }
  }
};
