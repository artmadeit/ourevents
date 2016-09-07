import { NgModule } from '@angular/core';

import { MdButtonModule} from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule} from '@angular2-material/toolbar';

import { LandingComponent }   from './landing.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { EventListComponent } from '../../components/event/event-list.component';
import { landingRouting } from './landing.routing';

@NgModule({
    imports: [
        MdButtonModule,
        MdIconModule,
        MdToolbarModule,
        landingRouting
    ],
    exports: [],
    declarations: [
        LandingComponent,
        WelcomeComponent,
        EventListComponent
    ],
    providers: [],
})
export class LandingModule { }
