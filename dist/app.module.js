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
var platform_browser_1 = require('@angular/platform-browser');
var line_item_service_1 = require("./line-item.service");
var main_container_component_1 = require('./main-container.component');
var api_service_1 = require('./api.service');
var auth_service_1 = require("./auth.service");
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var routes_1 = require('./routes');
var forms_1 = require("@angular/forms");
var about_component_1 = require('./about.component');
var app_component_1 = require('./app.component');
var auth_component_1 = require("./auth.component");
var host_component_1 = require("./host.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [main_container_component_1.MainContainer, app_component_1.AppComponent, about_component_1.AboutComponent, auth_component_1.AuthComponent, host_component_1.HostComponent],
            bootstrap: [main_container_component_1.MainContainer],
            providers: [line_item_service_1.LineItemService, api_service_1.ApiService, auth_service_1.AuthService].concat(http_1.HTTP_PROVIDERS, [router_1.provideRouter(routes_1.routes)])
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map