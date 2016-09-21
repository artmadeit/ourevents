import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from './event';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'event-list',
    templateUrl: 'event-list.component.html'
})
export class EventListComponent implements OnInit {
    events: Event[];

    constructor(private router: Router, private eventService: EventService) {
    }

    ngOnInit() {
        this.getEvents();
    }

    getEvents(): void {
        this.eventService
            .list()
            .then(events => this.events = events);
    }

    showDetail(event: Event) {
        this.router.navigate(['/eventos/ver', event.id]);
    }
}

Object.defineProperty(Array.prototype, 'chunk', {
    value: function (chunkSize) {
        const result = [];
        for (let i = 0; i < this.length; i += chunkSize) {
            result.push(this.slice(i, i + chunkSize));
        }
        return result;
    }
});
