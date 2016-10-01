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
    organization: Organization;
    type: string;

    constructor(service: OrganizationService) {
        super(service);
    }

    ngOnInit() {
        super.ngOnInit();
        this.clear();
    }

    addSponsor() {
        EventRole.create(this.organization, this.event, EventRoleTypes.Sponsor, this.type);
        this.clear();
        console.log(this.event.sponsorsByType);
    }

    private clear() {
        this.searchText = '';
        this.type = '';
    }

    select(organization: Organization) {
        super.onSelect();
        this.searchText = organization.name;
        this.organization = organization;
    }

    // get items() {
    //     const sponsors = this.event.parents(EventRoleTypes.Sponsor);
    //     return this._items.filter((item) => !sponsors.includes(item as Organization));
    // }
}
