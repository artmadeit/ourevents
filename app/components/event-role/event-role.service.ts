import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EventRole } from './event-role';
import { EVENTS } from './mock';

import {searchByName } from '../common/search-mock';


@Injectable()
export class EventRoleService {

    constructor() { }

    search(term: string): Observable<EventRole[]> {
        return Observable.of(this.fakeSearch(term));
    }

    private fakeSearch(term: string): EventRole[] {
        return <EventRole[]>searchByName(EVENTS, term);
    }
}
