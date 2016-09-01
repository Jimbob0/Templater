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
var line_item_component_1 = require('./line-item.component');
var line_item_service_1 = require('./line-item.service');
var AppComponent = (function () {
    function AppComponent(lineItemService) {
        this.lineItemService = lineItemService;
    }
    AppComponent.prototype.createNewItem = function () {
        this.lineItemService.createNewItem().subscribe();
    };
    AppComponent.prototype.deleteItem = function (id) {
        this.lineItemService.deleteItem(id).subscribe();
    };
    AppComponent.prototype.updateItem = function (id, newValue) {
        this.lineItemService.updateItem(id, newValue).subscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [line_item_component_1.LineItemComponent],
            template: "\n    <div class=\"container\">\n      <h1>Page Creation</h1>\n      <line-item\n        *ngFor=\"let item of lineItemService.items\"\n        [input]=\"item\"\n        (onUpdate)=\"updateItem(item._id, $event)\"\n        (onDelete)=\"deleteItem(item._id)\"\n      ></line-item>\n      <button class=\"btn btn-success\" (click)=\"createNewItem()\">New Page</button>\n    </div>\n  ",
            styles: ["\n    .total {\n      padding: 20px;\n    }\n    .title {\n      text-align: center;\n      font-weight: bold;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [line_item_service_1.LineItemService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map