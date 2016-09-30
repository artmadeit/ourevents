import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Organization } from './organization';
import { ORGANIZATIONS } from './mock';

import {searchByName } from '../../common/search-mock';
import { Searcher } from '../../common/search/searcher';

@Injectable()
export class OrganizationService implements Searcher {
    constructor() { }

    search(term: string): Observable<Organization[]> {
        return Observable.of(this.fakeSearch(term));
    }

    private fakeSearch(term: string): Organization[] {
        return <Organization[]>searchByName(ORGANIZATIONS, term);
    }
}