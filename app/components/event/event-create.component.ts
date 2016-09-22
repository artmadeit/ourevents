import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './event.service';
import { Event, Location, TimePeriod, Person } from './event';

import { MouseEvent } from 'angular2-google-maps/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// FIX this in ng2-custom-validation..to use ng2-custom-validation/core 
// TODO make typed message bag to message bag..
import { ValidationMessagesService, MessageBag } from 'ng2-custom-validation/src/index';

@Component({
    moduleId: module.id,
    selector: 'event-create',
    templateUrl: 'event-create.component.html',
    styles: [`
        .sebm-google-map-container {
            height: 300px;
        }
    `]
})
export class EventCreateComponent implements OnInit {
    defaultLocation: Location = {
        name: 'Lima',
        latitude: -12,
        longitude: -77
    };
    zoom: number = 12;
    location: Location;
    eventForm: FormGroup;
    errors: MessageBag;

    constructor(
        private eventService: EventService,
        private router: Router,
        private formBuilder: FormBuilder,
        private validationMessagesService: ValidationMessagesService) {
    }

    ngOnInit() {
        this.buildForm();
        this.location = {
            name: ''
        };
    }

    private buildForm() {
        this.eventForm = this.formBuilder.group(
            {
                'name': ['', [
                    Validators.required,
                    Validators.maxLength(100)
                ]],
                'description': '',
                'isPublic': ['', [Validators.required]],
                'location': ['', [Validators.maxLength(100)]],
            });

        this.eventForm.valueChanges
            .subscribe(data => {
                this.seeForErrors();
            });
        this.seeForErrors(); // (re)set validation messages now
    }

    private seeForErrors() {
        this.validationMessagesService
            .build(this.eventForm)
            .subscribe((errors: MessageBag) => this.errors = errors);
    }

    save() {
        this.eventService
            .save({
                name: this.eventForm.controls['name'].value,
                description: this.eventForm.controls['description'].value,
                location: {
                    name: this.eventForm.controls['location'].value,
                    latitude: this.location.latitude,
                    longitude: this.location.longitude
                },
                speaker: new Person('', ''),
                period: new TimePeriod(new Date(), new Date()),
                isPublic: true
            })
            .then(event => {
                alert('Evento creado');
                console.log(event);
                this.router.navigate(['/eventos']);
            });
    }

    mapClicked($event: MouseEvent) {
        this.location.latitude = $event.coords.lat;
        this.location.longitude = $event.coords.lng;
    }

    get latitude(): number {
        let result = this.location.latitude ?
            this.location.latitude : this.defaultLocation.latitude;
        return result;
    }

    get longitude(): number {
        let result = this.location.longitude ?
            this.location.longitude : this.defaultLocation.longitude;
        return result;
    }
}
