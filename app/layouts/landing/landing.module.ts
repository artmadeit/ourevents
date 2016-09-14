import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { config } from '../../config';
import { AuthModule } from '../../components/auth/auth.module';

import { LandingComponent } from './landing.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { EventListComponent } from '../../components/event/event-list.component';
import { EventCreateComponent } from '../../components/event/event-create.component';

import { EventService } from '../../components/event/event.service';

import { landingRouting } from './landing.routing';


@NgModule({
    imports: [
        SharedModule,
        AgmCoreModule.forRoot({
            apiKey: config.googleMapAPIKey
        }),
        AuthModule,
        landingRouting
    ],
    exports: [],
    declarations: [
        LandingComponent,
        WelcomeComponent,
        EventListComponent,
        EventCreateComponent
    ],
    providers: [
        EventService
    ],
})
export class LandingModule { }
