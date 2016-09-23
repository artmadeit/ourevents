import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PartyService } from './party.service';
import { Party } from './party';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'party-search',
    template: `
        <md-input class="full-width" placeholder="Busca por nombre una persona u organización" 
            value="{{selectedPartyName}}" #searchBox (keyup)="search(searchBox.value)">
        </md-input>
        <div *ngIf="!partyIsSelected">
            <md-list [ngClass]= "{'md-menu': existParties, 'md-overlay-pane': true }">
                <md-list-item (click)="select(party)" *ngFor="let party of parties">
                    <h3 md-line> {{party.name}} </h3>
                    <p md-line><span> {{party.shortDescription}} </span> </p>
                </md-list-item>
            </md-list>
        </div>
    `
})
export class PartySearchComponent implements OnInit {
    @Output()
    onChooseParty = new EventEmitter<Party>();
    selectedPartyName: string;
    partyIsSelected: boolean = false;
    parties: Party[];
    private searchTerms = new Subject<string>();

    constructor(private service: PartyService) {
    }

    ngOnInit() {
        const parties: Observable<Party[]> =
            this.searchTerms
                .debounceTime(300)        // wait for 300ms pause in events
                .distinctUntilChanged()   // ignore if next search term is same as previous
                .switchMap(term => term   // switch to new observable each time
                    ? this.service.search(term)
                    // or the observable of empty parties if no search term
                    : Observable.of<Party[]>([]))
                .catch(error => {
                    // TODO: real error handling
                    console.log(error);
                    return Observable.of<Party[]>([]);
                });

        parties.subscribe((data: Party[]) => {
            this.parties = data;
        });
    }

    search(term: string): void {
        this.partyIsSelected = false;
        this.searchTerms.next(term);
    }

    select(party: Party) {
        this.selectedPartyName = party.name;
        this.partyIsSelected = true;
        this.onChooseParty.emit(party);
    }

    get existParties(): boolean {
        return !!this.parties && this.parties.length !== 0;
    }
}
