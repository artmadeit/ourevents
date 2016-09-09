import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './event.service';
import { Event, Location } from './event';

import { MouseEvent } from 'angular2-google-maps/core';

let max = 5;

@Component({
    moduleId: module.id,
    selector: 'event-create',
    templateUrl: 'event-create.component.html',
    styles: [`
        .sebm-google-map-container {
            height: 300px;
        }

        .full-width {
            width: 100%;
        }

        //not used
        md-icon {
            font-size: 100%;
            height: inherit;
            vertical-align: top;
            width: inherit;
        }

        md-card {
            margin: 16px;
            padding: 0;
        }

        md-card md-card-content {
            padding: 16px;
        }
    `]
})
export class EventCreateComponent implements OnInit {
    defaultLocation: Location = {
        name: 'Lima',
        latitude: -12,
        longitude: -77
    }
    zoom: number = 12;
    event: Event;

    constructor(
        private eventService: EventService,
        private router: Router) { }

    ngOnInit() {
        this.clearForm();
    }

    save() {
        this.eventService
            .save(this.event)
            .then(event => {
                alert("Evento creado");
                this.router.navigate(['/eventos']);
            });
    }

    clearForm() {
        this.event = {
            name: "",
            description: "",
            location: {
                name: ""
            }
        }
    }

    mapClicked($event: MouseEvent) {
        this.event.location.latitude = $event.coords.lat;
        this.event.location.longitude = $event.coords.lng;
    }

    get latitude(): number {
        let result = this.event.location.latitude ?
            this.event.location.latitude : this.defaultLocation.latitude;
        return result;
    }

    get longitude(): number {
        let result = this.event.location.longitude ?
            this.event.location.longitude : this.defaultLocation.longitude;
        return result;
    }
}