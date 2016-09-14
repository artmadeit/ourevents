import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule} from '@angular/forms';

import { MdButtonModule} from '@angular2-material/button';
import { MdCardModule} from '@angular2-material/card';
import { MdCheckboxModule} from '@angular2-material/checkbox';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule} from '@angular2-material/toolbar';
import { MdListModule} from '@angular2-material/list';
import { MdInputModule} from '@angular2-material/input';
import { MdMenuModule} from '@angular2-material/menu';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { LandingComponent }   from './landing.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { EventListComponent } from '../../components/event/event-list.component';
import { EventCreateComponent } from '../../components/event/event-create.component';

import { LoginComponent } from '../../components/auth/login.component';
import { RegisterComponent } from '../../components/auth/register/register.component';


import { AuthService } from '../../components/auth/auth.service';
import { RegisterUserService } from '../../components/auth/register/register.service';
import { UserProviderService } from '../../components/auth/user-provider.service';

import { EventService } from '../../components/event/event.service';

import { landingRouting } from './landing.routing';
import { config } from '../../config';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdIconModule,
        MdToolbarModule,
        MdListModule,
        MdInputModule,
        MdMenuModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: config.googleMapAPIKey
        }),
        landingRouting
    ],
    exports: [],
    declarations: [
        LandingComponent,
        LoginComponent,
        RegisterComponent,
        WelcomeComponent,
        EventListComponent,
        EventCreateComponent
    ],
    providers: [
        AuthService,
        UserProviderService,
        RegisterUserService,
        EventService
    ],
})
export class LandingModule { }
