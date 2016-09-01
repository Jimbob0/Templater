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
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var AuthComponent = (function () {
    function AuthComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.mode = "login";
        this.buttonText = "Login";
        this.switchText = "Need to create an account?";
        this.loginInfo = {
            username: "",
            password: ""
        };
    }
    AuthComponent.prototype.switchMode = function (evt) {
        evt.preventDefault();
        if (this.mode === "login") {
            this.mode = "signup";
            this.buttonText = "Sign Up";
            this.switchText = "Already have an account?";
        }
        else {
            this.mode = "login";
            this.buttonText = "Login";
            this.switchText = "Need to create an account?";
        }
    };
    AuthComponent.prototype.authenticate = function () {
        if (!this.loginInfo.username || !this.loginInfo.password) {
            return;
        }
        this.authService
            .authenticate(this.mode, this.loginInfo)
            .subscribe(function (res) {
            if (res.status === "success") {
                this.router.navigate(['']);
            }
        }.bind(this));
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: "auth",
            template: "\n        <form class=\"form-inline\" (submit)=\"authenticate()\">\n            <div class=\"form-group\">\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    name=\"username\"\n                    placeholder=\"Username\"\n                    [(ngModel)]=\"loginInfo.username\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <input\n                    class=\"form-control\"\n                    type=\"password\"\n                    name=\"password\"\n                    placeholder=\"Password\"\n                    [(ngModel)]=\"loginInfo.password\"\n                />\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-info\">{{buttonText}}</button>\n                <button\n                    class=\"btn btn-default\"\n                    (click)=\"switchMode($event)\"\n                >{{switchText}}</button>\n            </div>\n        </form>\n    "
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map