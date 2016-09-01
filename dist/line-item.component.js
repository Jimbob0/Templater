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
var LineItemComponent = (function () {
    function LineItemComponent() {
        this.onDelete = new core_1.EventEmitter();
        this.onUpdate = new core_1.EventEmitter();
    }
    LineItemComponent.prototype.onDeleteClick = function () {
        this.onDelete.emit();
    };
    LineItemComponent.prototype.onContentsChange = function (evt) {
        this.input.contents = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onTitleChange = function (evt) {
        this.input.title = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onb1titleChange = function (evt) {
        this.input.b1title = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onb1contentsChange = function (evt) {
        this.input.b1contents = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onb2titleChange = function (evt) {
        this.input.b2title = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onb2contentsChange = function (evt) {
        this.input.b2contents = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onb3titleChange = function (evt) {
        this.input.b3title = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onb3contentsChange = function (evt) {
        this.input.b3contents = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onptitleChange = function (evt) {
        this.input.ptitle = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp1SourceChange = function (evt) {
        this.input.p1Source = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp2SourceChange = function (evt) {
        this.input.p2Source = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp3SourceChange = function (evt) {
        this.input.p3Source = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp4SourceChange = function (evt) {
        this.input.p4Source = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp5SourceChange = function (evt) {
        this.input.p5Source = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp6SourceChange = function (evt) {
        this.input.p6Source = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp1LinkChange = function (evt) {
        this.input.p1Link = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp2LinkChange = function (evt) {
        this.input.p2Link = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp3LinkChange = function (evt) {
        this.input.p3Link = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp4LinkChange = function (evt) {
        this.input.p4Link = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp5LinkChange = function (evt) {
        this.input.p5Link = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onp6LinkChange = function (evt) {
        this.input.p6Link = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onftitleChange = function (evt) {
        this.input.tfitle = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onfpSourceChange = function (evt) {
        this.input.fpSource = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onCTAcontentsChange = function (evt) {
        this.input.CTAcontents = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onBBcontentsChange = function (evt) {
        this.input.BBcontents = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onBBLinkChange = function (evt) {
        this.input.BBLink = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    LineItemComponent.prototype.onTMcontentsChange = function (evt) {
        this.input.TMcontents = evt.target.value;
        this.onUpdate.emit(this.input);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LineItemComponent.prototype, "input", void 0);
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
            styles: ["\n        .line-item {\n            margin-bottom: 1em;\n        }\n    "],
            template: "\n        <div class=\"container\">\n\n        <!-- Marketing Icons Section -->\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">\n                    <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        placeholder=\"Main Title\"\n                        [ngModel]=\"input.title\"\n                        (keyup)=\"onTitleChange($event)\"\n                    />\n                </h1>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4>\n                            <input\n                                class=\"form-control\"\n                                type=\"text\"\n                                placeholder=\"Box 1 Title\"\n                                [ngModel]=\"input.b1title\"\n                                (keyup)=\"onb1titleChange($event)\"\n                            />\n                        </h4>\n                    </div>\n                    <div class=\"panel-body\">\n                        <textarea\n                            class=\"form-control\"\n                            rows=\"6\"\n                            placeholder=\"Box 1 Contents\"\n                            [ngModel]=\"input.b1contents\"\n                            (keyup)=\"onb1contentsChange($event)\"\n                        ></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4>\n                            <input\n                                class=\"form-control\"\n                                type=\"text\"\n                                placeholder=\"Box 2 Title\"\n                                [ngModel]=\"input.b2title\"\n                                (keyup)=\"onb2titleChange($event)\"\n                            />\n                        </h4>\n                    </div>\n                    <div class=\"panel-body\">\n                        <textarea\n                            class=\"form-control\"\n                            rows=\"6\"\n                            placeholder=\"Box 2 Contents\"\n                            [ngModel]=\"input.b2contents\"\n                            (keyup)=\"onb2contentsChange($event)\"\n                        ></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4>\n                            <input\n                                class=\"form-control\"\n                                type=\"text\"\n                                placeholder=\"Box 3 Title\"\n                                [ngModel]=\"input.b3title\"\n                                (keyup)=\"onb3titleChange($event)\"\n                            />\n                        </h4>\n                    </div>\n                    <div class=\"panel-body\">\n                        <textarea\n                            class=\"form-control\"\n                            rows=\"6\"\n                            placeholder=\"Box 3 Contents\"\n                            [ngModel]=\"input.b3contents\"\n                            (keyup)=\"onb3contentsChange($event)\"\n                        ></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /.row -->\n\n        <!-- Portfolio Section -->\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h2 class=\"page-header\">\n                    <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        placeholder=\"Picture Title\"\n                        [ngModel]=\"input.ptitle\"\n                        (keyup)=\"onptitleChange($event)\"\n                    />\n                </h2>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"http://placehold.it/700x450\" alt=\"\">\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Picture source URL\"\n                            [ngModel]=\"input.p1Source\"\n                            (keyup)=\"onp1SourceChange($event)\"\n                        />\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Link URL\"\n                            [ngModel]=\"input.p1Link\"\n                            (keyup)=\"onp1LinkChange($event)\"\n                        />\n                </a>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"http://placehold.it/700x450\" alt=\"\">\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Picture source URL\"\n                            [ngModel]=\"input.p2Source\"\n                            (keyup)=\"onp2SourceChange($event)\"\n                        />\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Link URL\"\n                            [ngModel]=\"input.p2Link\"\n                            (keyup)=\"onp2LinkChange($event)\"\n                        />\n                </a>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"http://placehold.it/700x450\" alt=\"\">\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Picture source URL\"\n                            [ngModel]=\"input.p3Source\"\n                            (keyup)=\"onp3SourceChange($event)\"\n                        />\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Link URL\"\n                            [ngModel]=\"input.p3Link\"\n                            (keyup)=\"onp3LinkChange($event)\"\n                        />\n                </a>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"http://placehold.it/700x450\" alt=\"\">\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Picture source URL\"\n                            [ngModel]=\"input.p4Source\"\n                            (keyup)=\"onp4SourceChange($event)\"\n                        />\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Link URL\"\n                            [ngModel]=\"input.p4Link\"\n                            (keyup)=\"onp4LinkChange($event)\"\n                        />\n                </a>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"http://placehold.it/700x450\" alt=\"\">\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Picture source URL\"\n                            [ngModel]=\"input.p5Source\"\n                            (keyup)=\"onp5SourceChange($event)\"\n                        />\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Link URL\"\n                            [ngModel]=\"input.p5Link\"\n                            (keyup)=\"onp5LinkChange($event)\"\n                        />\n                </a>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-portfolio img-hover\" src=\"http://placehold.it/700x450\" alt=\"\">\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Picture source URL\"\n                            [ngModel]=\"input.p6Source\"\n                            (keyup)=\"onp6SourceChange($event)\"\n                        />\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Link URL\"\n                            [ngModel]=\"input.p6Link\"\n                            (keyup)=\"onp6LinkChange($event)\"\n                        />\n                </a>\n            </div>\n        </div>\n        <!-- /.row -->\n\n        <!-- Features Section -->\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h2 class=\"page-header\">\n                    <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        placeholder=\"Feature Title\"\n                        [ngModel]=\"input.ftitle\"\n                        (keyup)=\"onftitleChange($event)\"\n                    />\n                </h2>\n            </div>\n            <div class=\"col-md-6\">\n                <textarea\n                    class=\"form-control\"\n                    rows=\"14\"\n                    placeholder=\"Feature contents\"\n                    [ngModel]=\"input.contents\"\n                    (keyup)=\"onContentsChange($event)\"\n                ></textarea>\n            </div>\n            <div class=\"col-md-6\">\n                <img class=\"img-responsive\" src=\"http://placehold.it/700x450\" alt=\"\">\n                    <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        placeholder=\"Picture Source URL\"\n                        [ngModel]=\"input.fpSource\"\n                        (keyup)=\"onfpSourceChange($event)\"\n                    />\n            </div>\n        </div>\n        <!-- /.row -->\n\n        <hr>\n\n        <!-- Call to Action Section -->\n        <div class=\"well\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <textarea\n                        class=\"form-control\"\n                        rows=\"2\"\n                        placeholder=\"Call to Action Content\"\n                        [ngModel]=\"input.CTAcontents\"\n                        (keyup)=\"onCTAcontentsChange($event)\"\n                    ></textarea>\n                </div>\n                <div class=\"col-md-4\">\n                    <a class=\"btn btn-lg btn-default btn-block\" href=\"#\">\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Button Contents\"\n                            [ngModel]=\"input.BBcontents\"\n                            (keyup)=\"onBBcontentsChange($event)\"\n                        />\n                        <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            placeholder=\"Link URL\"\n                            [ngModel]=\"input.BBLink\"\n                            (keyup)=\"onBBLinkChange($event)\"\n                        />\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        <hr>\n        <!-- Footer -->\n        <footer>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        placeholder=\"Trademark\"\n                        [ngModel]=\"input.TMcontents\"\n                        (keyup)=\"onTMcontentsChange($event)\"\n                    />\n                </div>\n            </div>\n        </footer>\n        <button class=\"btn btn-success\" (click)=\"postNewItem()\">Host</button>\n        <button class=\"btn btn-danger\" (click)=\"onDeleteClick()\">Delete</button>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LineItemComponent);
    return LineItemComponent;
}());
exports.LineItemComponent = LineItemComponent;
//# sourceMappingURL=line-item.component.js.map