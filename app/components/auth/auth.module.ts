import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './auth.service';
import { RegisterUserService } from './register/register.service';
import { UserProviderService } from './user-provider.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthService,
        AuthGuard,
        UserProviderService,
        RegisterUserService
    ],
})
export class AuthModule { }
