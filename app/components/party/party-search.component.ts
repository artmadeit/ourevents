import { Component, OnInit } from '@angular/core';

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
    <div class="search">
        <md-input placeholder="Busca por nombre" #searchBox (keyup)="search(searchBox.value)">
        </md-input>
        <md-list [ngClass]= "{'md-menu': existParties, 'md-overlay-pane': true }">
            <md-list-item *ngFor="let party of parties">
                <h3 md-line> {{party.name}} </h3>
                <p md-line><span> {{party.name}} </span> </p>
            </md-list-item>
        </md-list>
    </div>`,
    styles: [`
        .search {
            margin: 8px;
        }
    `]
})
export class PartySearchComponent implements OnInit {
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
        this.searchTerms.next(term);
    }

    get existParties(): boolean {
        return !!this.parties && this.parties.length !== 0;
    }
}
