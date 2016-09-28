import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EventRoleType } from './event-role';

import { eventRoles } from './mock';
import {searchByName } from '../../common/search-mock';


@Injectable()
export class EventRoleService {

    search(term: string): Observable<EventRoleType[]> {
        return Observable.of(this.fakeSearch(term));
    }

    private fakeSearch(term: string): EventRoleType[] {
        return <EventRoleType[]>searchByName(eventRoles, term);
    }
}
