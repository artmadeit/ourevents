"use strict";
var router_1 = require('@angular/router');
var landing_component_1 = require('./landing.component');
var welcome_component_1 = require('../../components/welcome/welcome.component');
var event_list_component_1 = require('../../components/event/event-list.component');
var event_create_component_1 = require('../../components/event/event-create.component');
var landingRoutes = [
    {
        path: '',
        component: landing_component_1.LandingComponent,
        children: [
            { path: '', component: welcome_component_1.WelcomeComponent },
            { path: 'eventos', component: event_list_component_1.EventListComponent },
            { path: 'eventos/crear', component: event_create_component_1.EventCreateComponent }
        ]
    }
];
exports.landingRouting = router_1.RouterModule.forChild(landingRoutes);
//# sourceMappingURL=landing.routing.js.map