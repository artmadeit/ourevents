import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { AuthService } from '../../components/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'landing',
    templateUrl: 'landing.component.html',
    viewProviders: [MdIconRegistry],
    styleUrls: ['landing.component.css']
})
export class LandingComponent implements OnInit {
    constructor(mdIconRegistry: MdIconRegistry,
        private authService: AuthService) {}

    ngOnInit() { }

    get isLoggedIn(){
        return this.authService.isLoggedIn;
    }

    get user(){
        return this.authService.user;
    }

    logout(){
        this.authService.logout();
    }
}