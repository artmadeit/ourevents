import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from './event';

@Component({
    moduleId: module.id,
    selector: 'event-list',
    templateUrl: 'event-list.component.html'
})
export class EventListComponent implements OnInit{
    events: Event[];

    constructor(private eventService: EventService){
    }

    ngOnInit(){
        this.getEvents();
    }

    getEvents(): void {
        this.eventService
            .list()
            .then(events => this.events = events);
    }
}