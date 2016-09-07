import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';

@Component({
    moduleId: module.id,
    selector: 'landing',
    templateUrl: 'landing.component.html',
    viewProviders: [MdIconRegistry],
    styleUrls: ['landing.component.css']
})
export class LandingComponent implements OnInit {
    constructor(mdIconRegistry: MdIconRegistry) {}

    ngOnInit() { }
}