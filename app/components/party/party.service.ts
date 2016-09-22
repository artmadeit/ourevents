import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Party } from './party';
import { PARTIES } from './parties-mock';

@Injectable()
export class PartyService {
    constructor() { }

    search(term: string): Observable<Party[]> {
        return Observable.of(this.fakeSearch(term)).delay(1000);
    }

    private fakeSearch(term: string): Party[] {
        return PARTIES.filter((party) => party.name.includes(term));
    }
}
