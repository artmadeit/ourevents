import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Event } from './event';

@Injectable()
export class EventService {
	private EVENTS: Event[] = [
		{
			name: 'Un evento',
			location: {
				name: 'San Borja'
			}
		},
		{
			name: 'Una conferencia',
			description: 'Una descripcion conferencia',
			location: {
				name: 'Ate'
			}
		}
	];

	private eventsURL = 'http://localhost:8000/api/event';

	constructor(private http: Http) { }

	list(): Promise<Event[]> {
		return Promise.resolve(this.EVENTS);
		// return this.http.get(this.eventsURL)
		//     .toPromise()
		//     .then(response => response.json().data as Event[])
		//     .catch(this.handleError);
	}

	save(event: Event): Promise<Event> {
		this.EVENTS.push(event);
		return Promise.resolve(event);
		//   if (event.id) {
		//     return this.put(event);
		//   }
		//   return this.post(event);
	}


	// Add new Event
	private post(event: Event): Promise<Event> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		return this.http
			.post(this.eventsURL, JSON.stringify(event), { headers: headers })
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	// Update existing Event
	private put(event: Event) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.eventsURL}/${event.id}`;

		return this.http
			.put(url, JSON.stringify(event), { headers: headers })
			.toPromise()
			.then(() => event)
			.catch(this.handleError);
	}


	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}