import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Party } from './party';
import { PARTIES } from './mock';

import {searchByName } from '../common/search-mock';

@Injectable()
export class PartyService {
    constructor() { }

    search(term: string): Observable<Party[]> {
        return Observable.of(this.fakeSearch(term));
    }

    private fakeSearch(term: string): Party[] {
        return <Party[]>searchByName(PARTIES, term);
    }
}
