"use strict";
var router_1 = require('@angular/router');
var landing_component_1 = require('./landing.component');
var welcome_component_1 = require('../../components/welcome/welcome.component');
var event_list_component_1 = require('../../components/event/event-list.component');
var event_create_component_1 = require('../../components/event/event-create.component');
var login_component_1 = require('../../components/auth/login.component');
var register_component_1 = require('../../components/auth/register/register.component');
var landingRoutes = [
    {
        path: '',
        component: landing_component_1.LandingComponent,
        children: [
            { path: '', component: welcome_component_1.WelcomeComponent },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'registrate', component: register_component_1.RegisterComponent },
            { path: 'eventos', component: event_list_component_1.EventListComponent },
            { path: 'eventos/crear', component: event_create_component_1.EventCreateComponent }
        ]
    }
];
exports.landingRouting = router_1.RouterModule.forChild(landingRoutes);
//# sourceMappingURL=landing.routing.js.map