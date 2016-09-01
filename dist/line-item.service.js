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
var api_service_1 = require("./api.service");
var LineItemService = (function () {
    function LineItemService(apiService) {
        this.apiService = apiService;
        this.items = [];
        console.log("hey constructor is running");
        this.getAllItems().subscribe();
    }
    LineItemService.prototype.getAllItems = function () {
        return this.apiService.get("/all")
            .do(function (res) {
            this.items = res;
        }.bind(this));
    };
    LineItemService.prototype.getHostItems = function (_id) {
        return this.apiService.post("/one", JSON.stringify({
            _id: _id
        }))
            .do(function (res) {
            this.items = res;
        }.bind(this));
    };
    LineItemService.prototype.createNewItem = function () {
        console.log("called create new item");
        return this.apiService.post("/create", JSON.stringify({
            item: {
                contents: "",
                title: "",
                b1title: "",
                b1contents: "",
                b2title: "",
                b2contents: "",
                b3title: "",
                b3contents: "",
                ptitle: "",
                p1Source: "",
                p2Source: "",
                p3Source: "",
                p4Source: "",
                p5Source: "",
                p6Source: "",
                p1Link: "",
                p2Link: "",
                p3Link: "",
                p4Link: "",
                p5Link: "",
                p6Link: "",
                ftitle: "",
                fpSource: "",
                CTAcontents: "",
                BBcontents: "",
                BBLink: "",
                TMcontents: ""
            }
        })).do(function (res) {
            console.log("called callback for creating item");
            this.items.push(res);
        }.bind(this));
    };
    LineItemService.prototype.deleteItem = function (_id) {
        return this.apiService.post("/delete", JSON.stringify({
            _id: _id
        })).do(function (res) {
            this.items = res;
        }.bind(this));
    };
    LineItemService.prototype.updateItem = function (_id, newValue) {
        return this.apiService.post("/update", JSON.stringify({
            _id: _id,
            item: newValue
        })).do(function (res) {
            this.overwrite(this.findItemBy_id(_id), res);
        }.bind(this));
    };
    LineItemService.prototype.findItemById = function (_id) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item._id === _id) {
                return item;
            }
        }
        return null;
    };
    LineItemService.prototype.overwrite = function (orig, newValues) {
        for (var i in newValues) {
            if (newValues.hasOwnProperty(i)) {
                orig[i] = newValues[i];
            }
        }
    };
    LineItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], LineItemService);
    return LineItemService;
}());
exports.LineItemService = LineItemService;
//# sourceMappingURL=line-item.service.js.map