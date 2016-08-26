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
var common_1 = require("@angular/common");
var LineItemComponent = (function () {
    function LineItemComponent() {
        this.onDelete = new core_1.EventEmitter();
        this.onUpdate = new core_1.EventEmitter();
        this.currentFocus = "";
    }
    LineItemComponent.prototype.getMoneyFor = function (time) {
        return this.currentFocus === time
            ? this.monies[time]
            : this.monies[time].toFixed(2);
    };
    LineItemComponent.prototype.onDeleteClick = function () {
        this.onDelete.emit();
    };
    LineItemComponent.prototype.onKeyUp = function (evt, time) {
        if (!evt.target.value) {
            return;
        }
        var m = parseFloat(evt.target.value);
        if (time === "year") {
            m = m;
        }
        else if (time === "month") {
            m = m * 12;
        }
        else if (time === "week") {
            m = m * 52;
        }
        else if (time === "day") {
            m = m * 365;
        }
        var val = parseFloat(evt.target.value);
        // this.monies = {
        //     year: time === "year" ? val : m,
        //     month: time === "month" ? val : (m / 12),
        //     week: time === "week" ? val : (m / 52),
        //     day: time === "day" ? val : (m / 365)
        // };
        this.monies.year = time === "year" ? val : m;
        this.monies.month = time === "month" ? val : (m / 12);
        this.monies.week = time === "week" ? val : (m / 52);
        this.monies.day = time === "day" ? val : (m / 365);
        this.onUpdate.emit(this.monies);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LineItemComponent.prototype, "monies", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LineItemComponent.prototype, "onDelete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LineItemComponent.prototype, "onUpdate", void 0);
    LineItemComponent = __decorate([
        core_1.Component({
            selector: 'line-item',
            directives: common_1.FORM_DIRECTIVES.slice(),
            styles: ["\n        .line-item {\n            margin-bottom: 0.5em;\n        }\n    "],
            template: "\n        <div class=\"row line-item\">\n            <div class=\"col-xs-2\">\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    placeholder=\"year\"\n                    [ngModel]=\"getMoneyFor('year')\"\n                    (keyup)=\"onKeyUp($event, 'year')\"\n                    (focus)=\"currentFocus = 'year'\"\n                    (blur)=\"currentFocus = ''\"\n                />\n            </div>\n            <div class=\"col-xs-2\">\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    placeholder=\"month\"\n                    [ngModel]=\"getMoneyFor('month')\"\n                    (keyup)=\"onKeyUp($event, 'month')\"\n                    (focus)=\"currentFocus = 'month'\"\n                    (blur)=\"currentFocus = ''\"\n                />\n            </div>\n            <div class=\"col-xs-2\">\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    placeholder=\"week\"\n                    [ngModel]=\"getMoneyFor('week')\"\n                    (keyup)=\"onKeyUp($event, 'week')\"\n                    (focus)=\"currentFocus = 'week'\"\n                    (blur)=\"currentFocus = ''\"\n                />\n            </div>\n            <div class=\"col-xs-2\">\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    placeholder=\"day\"\n                    [ngModel]=\"getMoneyFor('day')\"\n                    (keyup)=\"onKeyUp($event, 'day')\"\n                    (focus)=\"currentFocus = 'day'\"\n                    (blur)=\"currentFocus = ''\"\n                />\n            </div>\n            <div class=\"col-xs-2\">\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    placeholder=\"description\"\n                    [ngModel]=\"monies.description\"\n                    (keyup)=\"onDescriptionChange($event)\"\n                />\n            </div>\n            <div class=\"col-xs-4\">\n                <button class=\"btn btn-danger\"\n                    (click)=\"onDeleteClick()\"\n                > X </button>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LineItemComponent);
    return LineItemComponent;
}());
exports.LineItemComponent = LineItemComponent;
//# sourceMappingURL=line-item.component.js.map