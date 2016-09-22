import { NgModule } from '@angular/core';

import { config } from '../../config';
import { SharedModule } from '../../shared.module';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AuthModule } from '../../components/auth/auth.module';
import { PartyModule } from '../../components/party/party.module';

import { LandingComponent } from './landing.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

import { EventListComponent } from '../../components/event/event-list.component';
import { EventCreateComponent } from '../../components/event/event-create.component';
import { EventDetailComponent } from '../../components/event/event-detail.component';
import { EventService } from '../../components/event/event.service';

import { landingRouting } from './landing.routing';

@NgModule({
    imports: [
        SharedModule,
        AgmCoreModule.forRoot({
            apiKey: config.googleMapAPIKey
        }),
        AuthModule,
        PartyModule,
        landingRouting
    ],
    exports: [],
    declarations: [
        LandingComponent,
        WelcomeComponent,
        EventListComponent,
        EventCreateComponent,
        EventDetailComponent
    ],
    providers: [
        EventService
    ],
})
export class LandingModule { }
