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
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var toolbar_1 = require('@angular2-material/toolbar');
var list_1 = require('@angular2-material/list');
var input_1 = require('@angular2-material/input');
var landing_component_1 = require('./landing.component');
var welcome_component_1 = require('../../components/welcome/welcome.component');
var event_list_component_1 = require('../../components/event/event-list.component');
var event_create_component_1 = require('../../components/event/event-create.component');
var event_service_1 = require('../../components/event/event.service');
var landing_routing_1 = require('./landing.routing');
var LandingModule = (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                button_1.MdButtonModule,
                icon_1.MdIconModule,
                toolbar_1.MdToolbarModule,
                list_1.MdListModule,
                input_1.MdInputModule,
                landing_routing_1.landingRouting
            ],
            exports: [],
            declarations: [
                landing_component_1.LandingComponent,
                welcome_component_1.WelcomeComponent,
                event_list_component_1.EventListComponent,
                event_create_component_1.EventCreateComponent
            ],
            providers: [
                event_service_1.EventService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], LandingModule);
    return LandingModule;
}());
exports.LandingModule = LandingModule;
//# sourceMappingURL=landing.module.js.map