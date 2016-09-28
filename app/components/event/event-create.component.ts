import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './event.service';
import { Location, TimePeriod, Event } from './index';
import { Party } from '../party/party';

import { MouseEvent } from 'angular2-google-maps/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationMessagesService, MessageBag } from 'ng2-custom-validation';

@Component({
    moduleId: module.id,
    selector: 'event-create',
    templateUrl: 'event-create.component.html',
    styles: [`
        .sebm-google-map-container {
            height: 300px;
        }

        .search {
            margin: 8px;
        }
    `]
})
export class EventCreateComponent implements OnInit {
    eventForm: FormGroup;
    errors: MessageBag;
    event: Event;
    map = {
        location: new Location('Lima', { latitude: -12, longitude: -77 }),
        zoom: 12
    };

    constructor(
        private eventService: EventService,
        private router: Router,
        private formBuilder: FormBuilder,
        private validationMessagesService: ValidationMessagesService) {
        this.event = new Event('', this.map.location, new TimePeriod(new Date(), new Date()));
    }

    ngOnInit() {
        this.buildForm();
    }

    private buildForm() {
        this.eventForm = this.formBuilder.group(
            {
                'name': [this.event.name, [
                    Validators.required,
                    Validators.maxLength(100)
                ]],
                'acronym': [this.event.acronym, [Validators.maxLength(12)]],
                'description': [this.event.description, [Validators.maxLength(100)]],
                'isPublic': [this.event.isPublic.toString(), [Validators.required]],
                'location': [this.event.location.name, [Validators.maxLength(100)]],
            });

        // TODO refactor this to the ng2-custom-validation package
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
        this.event.name = this.eventForm.value['name'];
        this.event.location.name = this.eventForm.value['location'];
        this.event.period = new TimePeriod(new Date(), new Date());
        this.event.isPublic = this.eventForm.value['isPublic'];
        this.event.acronym = this.eventForm.controls['acronym'].value;
        this.event.description = this.eventForm.controls['description'].value;
        console.log(this.event);

        this.eventService.save(this.event).then(eventRegistered => {
            alert('Evento creado');
            console.log(eventRegistered);
            this.router.navigate(['/eventos']);
        });
    }

    mapClicked($event: MouseEvent) {
        this.event.location.point = {
            latitude: $event.coords.lat,
            longitude: $event.coords.lng
        };
    }

    get latitude(): number {
        let result = this.event.location.latitude ?
            this.event.location.latitude : this.map.location.latitude;
        return result;
    }

    get longitude(): number {
        let result = this.event.location.longitude ?
            this.event.location.longitude : this.map.location.longitude;
        return result;
    }

    getSelectedParty(selectedParty: Party) {
        console.log('Selected:', selectedParty);
    }
}
