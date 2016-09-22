import { NgModule } from '@angular/core';
import { PersonService } from './person.service';
import { PartyService } from './party.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        PersonService,
        PartyService
    ],
})
export class PartyModule { }
