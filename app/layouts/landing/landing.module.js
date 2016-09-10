"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var checkbox_1 = require('@angular2-material/checkbox');
var icon_1 = require('@angular2-material/icon');
var toolbar_1 = require('@angular2-material/toolbar');
var list_1 = require('@angular2-material/list');
var input_1 = require('@angular2-material/input');
var menu_1 = require('@angular2-material/menu');
var core_2 = require('angular2-google-maps/core');
var landing_component_1 = require('./landing.component');
var welcome_component_1 = require('../../components/welcome/welcome.component');
var event_list_component_1 = require('../../components/event/event-list.component');
var event_create_component_1 = require('../../components/event/event-create.component');
var login_component_1 = require('../../components/auth/login.component');
var register_component_1 = require('../../components/auth/register/register.component');
var auth_service_1 = require('../../components/auth/auth.service');
var register_service_1 = require('../../components/auth/register/register.service');
var event_service_1 = require('../../components/event/event.service');
var landing_routing_1 = require('./landing.routing');
var config_1 = require('../../config');
var LandingModule = (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                button_1.MdButtonModule,
                card_1.MdCardModule,
                checkbox_1.MdCheckboxModule,
                icon_1.MdIconModule,
                toolbar_1.MdToolbarModule,
                list_1.MdListModule,
                input_1.MdInputModule,
                menu_1.MdMenuModule.forRoot(),
                core_2.AgmCoreModule.forRoot({
                    apiKey: config_1.config.googleMapAPIKey
                }),
                landing_routing_1.landingRouting
            ],
            exports: [],
            declarations: [
                landing_component_1.LandingComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                welcome_component_1.WelcomeComponent,
                event_list_component_1.EventListComponent,
                event_create_component_1.EventCreateComponent
            ],
            providers: [
                auth_service_1.AuthService,
                register_service_1.RegisterUserService,
                event_service_1.EventService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], LandingModule);
    return LandingModule;
}());
exports.LandingModule = LandingModule;
//# sourceMappingURL=landing.module.js.map