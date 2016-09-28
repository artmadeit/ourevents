import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EventRole } from './event-role';

import { eventRoles } from './mock';
import {searchByName } from '../../common/search-mock';


@Injectable()
export class EventRoleService {

    search(term: string): Observable<EventRole[]> {
        return Observable.of(this.fakeSearch(term));
    }

    private fakeSearch(term: string): EventRole[] {
        return <EventRole[]>searchByName(eventRoles, term);
    }
}
