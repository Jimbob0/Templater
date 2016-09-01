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
var host_service_1 = require('./host.service');
var HostComponent = (function () {
    function HostComponent(route, router, service) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            console.log(id);
            _this.service.getHostItems(id).subscribe();
        });
        console.log(service);
    }
    HostComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"container\">\n\n        <!-- Marketing Icons Section -->\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">\n                    {{service.items.title}}\n                </h1>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4>\n                            {{service.items.b1title}}\n                        </h4>\n                    </div>\n                    <div class=\"panel-body\">\n                        {{service.items.b1contents}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4>\n                            {{service.items.b2title}}\n                        </h4>\n                    </div>\n                    <div class=\"panel-body\">\n                        {{service.items.b2contents}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4>\n                            {{service.items.b3title}}\n                        </h4>\n                    </div>\n                    <div class=\"panel-body\">\n                        {{service.items[0].b3contents}}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /.row -->\n\n        <!-- Portfolio Section -->\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h2 class=\"page-header\">\n                {{service.items.ptitle}}\n                </h2>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"{{service.items.p1Link}}\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"{{service.items.p1Source}}\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"{{service.items.p2Link}}\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"{{service.items.p2Source}}\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"{{service.items.p3Link}}\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"{{service.items.p3Source}}\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"{{service.items.p4Link}}\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"{{service.items.p4Source}}\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"{{service.items.p5Link}}\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"{{service.items.p5Source}}\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"{{service.items.p6Link}}\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"{{service.items.p6Source}}\" alt=\"\">\n                </a>\n            </div>\n        </div>\n        <!-- /.row -->\n\n        <!-- Features Section -->\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h2 class=\"page-header\">\n                    {{service.items.ftitle}}\n                </h2>\n            </div>\n            <div class=\"col-md-6\">\n                {{service.items.contents}}\n            </div>\n            <div class=\"col-md-6\">\n                <img class=\"img-responsive\" src=\"{{service.items.fpSource}}\" alt=\"\">\n            </div>\n        </div>\n        <!-- /.row -->\n\n        <hr>\n\n        <!-- Call to Action Section -->\n        <div class=\"well\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    {{service.items.CTAcontents}}\n                </div>\n                <div class=\"col-md-4\">\n                    <a class=\"btn btn-lg btn-default btn-block\" href=\"{{service.items.BBLink}}\">\n                        {{service.items.BBcontents}}\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        <hr>\n        <!-- Footer -->\n        <footer>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    {{service.items.TMcontent}}\n                </div>\n            </div>\n        </footer>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, host_service_1.HostService])
    ], HostComponent);
    return HostComponent;
}());
exports.HostComponent = HostComponent;
//# sourceMappingURL=host.component.js.map