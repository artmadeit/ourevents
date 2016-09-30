import { NgModule } from '@angular/core';
import { PersonService } from './person/index';
import { PartyService } from './party.service';
import { PartySearchComponent } from './party-search.component';
import { OrganizationService } from './organization/index';
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
        PartyService,
        OrganizationService
    ],
})
export class PartyModule { }
