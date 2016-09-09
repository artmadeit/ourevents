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
var router_1 = require('@angular/router');
var event_service_1 = require('./event.service');
var max = 5;
var EventCreateComponent = (function () {
    function EventCreateComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.defaultLocation = {
            name: 'Lima',
            latitude: -12,
            longitude: -77
        };
        this.zoom = 12;
    }
    EventCreateComponent.prototype.ngOnInit = function () {
        this.clearForm();
    };
    EventCreateComponent.prototype.save = function () {
        var _this = this;
        this.eventService
            .save(this.event)
            .then(function (event) {
            alert("Evento creado");
            _this.router.navigate(['/eventos']);
        });
    };
    EventCreateComponent.prototype.clearForm = function () {
        this.event = {
            name: "",
            description: "",
            location: {
                name: ""
            }
        };
    };
    EventCreateComponent.prototype.mapClicked = function ($event) {
        this.event.location.latitude = $event.coords.lat;
        this.event.location.longitude = $event.coords.lng;
    };
    Object.defineProperty(EventCreateComponent.prototype, "latitude", {
        get: function () {
            var result = this.event.location.latitude ?
                this.event.location.latitude : this.defaultLocation.latitude;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventCreateComponent.prototype, "longitude", {
        get: function () {
            var result = this.event.location.longitude ?
                this.event.location.longitude : this.defaultLocation.longitude;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    EventCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'event-create',
            templateUrl: 'event-create.component.html',
            styles: ["\n        .sebm-google-map-container {\n            height: 300px;\n        }\n\n        .full-width {\n            width: 100%;\n        }\n\n        //not used\n        md-icon {\n            font-size: 100%;\n            height: inherit;\n            vertical-align: top;\n            width: inherit;\n        }\n\n        md-card {\n            margin: 16px;\n            padding: 0;\n        }\n\n        md-card md-card-content {\n            padding: 16px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.Router])
    ], EventCreateComponent);
    return EventCreateComponent;
}());
exports.EventCreateComponent = EventCreateComponent;
//# sourceMappingURL=event-create.component.js.map