import { Component, OnInit, Input } from '@angular/core';
import { Event, EventRole, EventRoleTypes } from '../index';
import { Party } from '../../party/party';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'sponsor-create',
    templateUrl: 'sponsor-create.component.html'
})
export class SponsorCreateComponent implements OnInit {
    @Input()
    event: Event;
    form: FormGroup;
    private selectedOrganization: any;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.buildForm();
    }

    private buildForm() {
        this.form = this.formBuilder.group(
            {
                'name': ['', [Validators.required]],
                'type': ['', [Validators.required]]
            });
    }

    getSelectedSponsor(selectedSponsor: Party) {
        this.selectedOrganization = selectedSponsor;
    }

    addSponsor() {
        EventRole.create(this.selectedOrganization, this.event, EventRoleTypes.Sponsor, this.form.value['type']);
        this.form.reset();
    }

}
