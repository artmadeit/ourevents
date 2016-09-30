import { Component, OnInit, Input } from '@angular/core';

import { Event, EventRole, EventRoleTypes } from '../index';
import { Organization, OrganizationService } from '../../party/index';
import { SearchComponent } from '../../common/search/search.component';

@Component({
    moduleId: module.id,
    selector: 'sponsor-create',
    templateUrl: 'sponsor-create.component.html'
})
export class SponsorCreateComponent extends SearchComponent implements OnInit {
    @Input() event: Event;
    organization: Organization = new Organization('');
    type: string;

    constructor(service: OrganizationService) {
        super(service);
    }

    select(organization: Organization) {
        super.onSelect();
        this.organization = organization;
    }

    addSponsor() {
        EventRole.create(this.organization, this.event, EventRoleTypes.Sponsor, this.type);
    }
}
