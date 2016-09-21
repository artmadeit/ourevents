import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventService } from './event.service';
import { Event } from './event';

@Component({
    moduleId: module.id,
    selector: 'event-detail',
    templateUrl: 'event-detail.component.html'
})
export class EventDetailComponent implements OnInit {
    event: Event;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EventService) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.get(id).then(event => this.event = event);
        });
    }
}
