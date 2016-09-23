import { NgModule } from '@angular/core';
import { PersonService } from './person/index';
import { PartyService } from './party.service';
import { PartySearchComponent } from './party-search.component';
import { SharedModule } from '../../shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        PartySearchComponent
    ],
    declarations: [
        PartySearchComponent
    ],
    providers: [
        PersonService,
        PartyService
    ],
})
export class PartyModule { }
