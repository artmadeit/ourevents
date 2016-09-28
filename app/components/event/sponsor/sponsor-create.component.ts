import { Component, OnInit, Input } from '@angular/core';
import { Event, EventRole, EventRoleTypes } from '../index';
import { Party } from '../../party/party';

@Component({
    moduleId: module.id,
    selector: 'sponsor-create',
    templateUrl: 'sponsor-create.component.html'
})
export class SponsorCreateComponent implements OnInit {
    @Input()
    event: Event;
    private selectedOrganization: any;

    constructor() { }

    ngOnInit() { }

    addSponsorType(sponsorType: any) {
        EventRole.create(this.selectedOrganization, this.event, EventRoleTypes.Sponsor, sponsorType.value);
        sponsorType.value = '';
    }

    getSelectedSponsor(selectedSponsor: Party) {
        this.selectedOrganization = selectedSponsor;
    }

}