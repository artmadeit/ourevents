import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Event } from './event';

@Injectable()
export class EventService {

    private eventsURL = 'http://localhost:8000/api/event';

    constructor(private http: Http) { }

    list(): Promise<Event[]> {
        return this.http.get(this.eventsURL)
            .toPromise()
            .then(response => response.json().data as Event[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}