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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var line_item_service_1 = require('./line-item.service');
var HostComponent = (function () {
    function HostComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    HostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.service.getHostItems(id);
        });
    };
    HostComponent = __decorate([
        core_1.Component({
            template: "\n        <div>\n            <p>\n                This service allows you to create your own webpage by filling the appropriate input fields with content, image links, or website links. The data is stored and you can update it whenever you log in. \n                <br>\n                <br>\n                To start a new project hit the new page button at the bottom of the home page. \n                <br>\n                <br>\n                There are two buttons at the bottom of every template: \n                <br> \n                <br>\n                Host creates you webpage using the data you have inputed. The service will send you to a url on the with the data you inputed displayed. This url is the address for your new webpage. \n                <br> \n                <br>\n                Delete removes that template and all inputed data from the server and the URL for that page will be removed.\n                <br>\n                <br>\n                This service was created by James Neal as the final project for the full-time full-stack web development course at CodeCraft.\n            </p>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, line_item_service_1.LineItemService])
    ], HostComponent);
    return HostComponent;
}());
exports.HostComponent = HostComponent;
//# sourceMappingURL=host.component.js.map