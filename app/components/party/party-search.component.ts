import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { SearchComponent } from '../common/search/search.component';
import { PartyService } from './party.service';
import { Party } from './party';

@Component({
    moduleId: module.id,
    selector: 'party-search',
    template: `
        <md-input class="full-width" placeholder="Busca por nombre una persona u organización" 
            [(ngModel)]="selectedPartyName" #searchBox (keyup)="search(searchBox.value)">
        </md-input>
        <div *ngIf="!isItemSelected">
            <md-list [ngClass]= "{'md-menu': existItems, 'md-overlay-pane': true }">
                <md-list-item (click)="select(party)" *ngFor="let party of items">
                    <h3 md-line> {{party.name}} </h3>
                    <p md-line><span> {{party.shortDescription}} </span> </p>
                </md-list-item>
            </md-list>
        </div>
    `
})
export class PartySearchComponent extends SearchComponent implements OnInit {
    selectedPartyName: string;
    @Output() onChooseParty = new EventEmitter<Party>();

    constructor(service: PartyService) {
        super(service);
    }

    select(party: Party) {
        super.onSelect();
        this.selectedPartyName = party.name;
        console.log('selected', this.selectedPartyName);
        this.onChooseParty.emit(party);
    }
}


// const hola = 
// `
// <search >
//     <search-box placeholder="Busca por nombre una persona u organización">
//     <search-list>
//         <search-list-item (click)="select(party)" *ngFor="let item of items">
//                 <h3 md-line> {{item.avatar}} </h3>
//                 <h3 md-line> {{item.name}} </h3>
//                 <p md-line><span> {{party.shortDescription}} </span> </p>
//         </search-list-item>
//     </search-list>
// </search>
//     `;






//     const hola2 = 
// `
// <search>
//     <search-box placeholder="Busca por nombre una persona u organización">
//     <search-list>
//         <search-list-item (click)="select(party)" *ngFor="let item of items">
//                 <h3 md-line> {{item.avatar}} </h3>
//                 <h3 md-line> {{item.name}} </h3>
//                 <p md-line><span> {{party.shortDescription}} </span> </p>
//         </search-list-item>
//     </search-list>
// </search>
//     `



