"use strict";
var app_component_1 = require('./app.component');
var about_component_1 = require('./about.component');
var auth_component_1 = require("./auth.component");
var auth_service_1 = require("./auth.service");
var host_component_1 = require("./host.component");
exports.routes = [
    {
        path: '',
        component: app_component_1.AppComponent,
        canActivate: [auth_service_1.AuthService]
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
    },
    {
        path: 'auth',
        component: auth_component_1.AuthComponent
    },
    {
        path: 'host/:id',
        component: host_component_1.HostComponent
    }
];
//# sourceMappingURL=routes.js.map