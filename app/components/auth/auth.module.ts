import { NgModule } from '@angular/core';

import { CommonModule }   from '@angular/common';
import { FormsModule} from '@angular/forms';

import { MdButtonModule} from '@angular2-material/button';
import { MdCardModule} from '@angular2-material/card';
import { MdInputModule} from '@angular2-material/input';
import { MdToolbarModule} from '@angular2-material/toolbar';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './auth.service';
import { RegisterUserService } from './register/register.service';
import { UserProviderService } from './user-provider.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule,
        MdToolbarModule
    ],
    exports: [],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthService,
        UserProviderService,
        RegisterUserService
    ],
})
export class AuthModule { }
