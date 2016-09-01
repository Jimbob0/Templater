import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'line-item',
    styles: [`
        .line-item {
            margin-bottom: 1em;
        }
    `],
    template: `
        <div class="container">

        <!-- Marketing Icons Section -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Main Title"
                        [ngModel]="input.title"
                        (keyup)="onTitleChange($event)"
                    />
                </h1>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Box 1 Title"
                                [ngModel]="input.b1title"
                                (keyup)="onb1titleChange($event)"
                            />
                        </h4>
                    </div>
                    <div class="panel-body">
                        <textarea
                            class="form-control"
                            rows="6"
                            placeholder="Box 1 Contents"
                            [ngModel]="input.b1contents"
                            (keyup)="onb1contentsChange($event)"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Box 2 Title"
                                [ngModel]="input.b2title"
                                (keyup)="onb2titleChange($event)"
                            />
                        </h4>
                    </div>
                    <div class="panel-body">
                        <textarea
                            class="form-control"
                            rows="6"
                            placeholder="Box 2 Contents"
                            [ngModel]="input.b2contents"
                            (keyup)="onb2contentsChange($event)"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Box 3 Title"
                                [ngModel]="input.b3title"
                                (keyup)="onb3titleChange($event)"
                            />
                        </h4>
                    </div>
                    <div class="panel-body">
                        <textarea
                            class="form-control"
                            rows="6"
                            placeholder="Box 3 Contents"
                            [ngModel]="input.b3contents"
                            (keyup)="onb3contentsChange($event)"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->

        <!-- Portfolio Section -->
        <div class="row">
            <div class="col-lg-12">
                <h2 class="page-header">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Picture Title"
                        [ngModel]="input.ptitle"
                        (keyup)="onptitleChange($event)"
                    />
                </h2>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="portfolio-item.html">
                    <img class="img-responsive img-portfolio img-hover" src="http://placehold.it/700x450" alt="">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Picture source URL"
                            [ngModel]="input.p1Source"
                            (keyup)="onp1SourceChange($event)"
                        />
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Link URL"
                            [ngModel]="input.p1Link"
                            (keyup)="onp1LinkChange($event)"
                        />
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="portfolio-item.html">
                    <img class="img-responsive img-portfolio img-hover" src="http://placehold.it/700x450" alt="">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Picture source URL"
                            [ngModel]="input.p2Source"
                            (keyup)="onp2SourceChange($event)"
                        />
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Link URL"
                            [ngModel]="input.p2Link"
                            (keyup)="onp2LinkChange($event)"
                        />
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="portfolio-item.html">
                    <img class="img-responsive img-portfolio img-hover" src="http://placehold.it/700x450" alt="">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Picture source URL"
                            [ngModel]="input.p3Source"
                            (keyup)="onp3SourceChange($event)"
                        />
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Link URL"
                            [ngModel]="input.p3Link"
                            (keyup)="onp3LinkChange($event)"
                        />
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="portfolio-item.html">
                    <img class="img-responsive img-portfolio img-hover" src="http://placehold.it/700x450" alt="">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Picture source URL"
                            [ngModel]="input.p4Source"
                            (keyup)="onp4SourceChange($event)"
                        />
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Link URL"
                            [ngModel]="input.p4Link"
                            (keyup)="onp4LinkChange($event)"
                        />
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="portfolio-item.html">
                    <img class="img-responsive img-portfolio img-hover" src="http://placehold.it/700x450" alt="">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Picture source URL"
                            [ngModel]="input.p5Source"
                            (keyup)="onp5SourceChange($event)"
                        />
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Link URL"
                            [ngModel]="input.p5Link"
                            (keyup)="onp5LinkChange($event)"
                        />
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="portfolio-item.html">
                    <img class="img-responsive img-portfolio img-hover" src="http://placehold.it/700x450" alt="">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Picture source URL"
                            [ngModel]="input.p6Source"
                            (keyup)="onp6SourceChange($event)"
                        />
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Link URL"
                            [ngModel]="input.p6Link"
                            (keyup)="onp6LinkChange($event)"
                        />
                </a>
            </div>
        </div>
        <!-- /.row -->

        <!-- Features Section -->
        <div class="row">
            <div class="col-lg-12">
                <h2 class="page-header">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Feature Title"
                        [ngModel]="input.ftitle"
                        (keyup)="onftitleChange($event)"
                    />
                </h2>
            </div>
            <div class="col-md-6">
                <textarea
                    class="form-control"
                    rows="14"
                    placeholder="Feature contents"
                    [ngModel]="input.contents"
                    (keyup)="onContentsChange($event)"
                ></textarea>
            </div>
            <div class="col-md-6">
                <img class="img-responsive" src="http://placehold.it/700x450" alt="">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Picture Source URL"
                        [ngModel]="input.fpSource"
                        (keyup)="onfpSourceChange($event)"
                    />
            </div>
        </div>
        <!-- /.row -->

        <hr>

        <!-- Call to Action Section -->
        <div class="well">
            <div class="row">
                <div class="col-md-8">
                    <textarea
                        class="form-control"
                        rows="2"
                        placeholder="Call to Action Content"
                        [ngModel]="input.CTAcontents"
                        (keyup)="onCTAcontentsChange($event)"
                    ></textarea>
                </div>
                <div class="col-md-4">
                    <a class="btn btn-lg btn-default btn-block" href="#">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Button Contents"
                            [ngModel]="input.BBcontents"
                            (keyup)="onBBcontentsChange($event)"
                        />
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Link URL"
                            [ngModel]="input.BBLink"
                            (keyup)="onBBLinkChange($event)"
                        />
                    </a>
                </div>
            </div>
        </div>

        <hr>
        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Trademark"
                        [ngModel]="input.TMcontents"
                        (keyup)="onTMcontentsChange($event)"
                    />
                </div>
            </div>
        </footer>
        <button class="btn btn-success" (click)="postNewItem()">Host</button>
        <button class="btn btn-danger" (click)="onDeleteClick()">Delete</button>
    </div>
    `
})
export class LineItemComponent {

    @Input() input;

    @Output() onDelete = new EventEmitter();

    @Output() onUpdate = new EventEmitter();

    onDeleteClick() {
        this.onDelete.emit();
    }

    onContentsChange(evt) {
        this.input.contents = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onTitleChange(evt) {
        this.input.title = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onb1titleChange(evt) {
        this.input.b1title = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onb1contentsChange(evt) {
        this.input.b1contents = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onb2titleChange(evt) {
        this.input.b2title = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onb2contentsChange(evt) {
        this.input.b2contents = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onb3titleChange(evt) {
        this.input.b3title = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onb3contentsChange(evt) {
        this.input.b3contents = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onptitleChange(evt) {
        this.input.ptitle = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp1SourceChange(evt) {
        this.input.p1Source = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp2SourceChange(evt) {
        this.input.p2Source = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp3SourceChange(evt) {
        this.input.p3Source = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp4SourceChange(evt) {
        this.input.p4Source = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp5SourceChange(evt) {
        this.input.p5Source = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp6SourceChange(evt) {
        this.input.p6Source = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp1LinkChange(evt) {
        this.input.p1Link = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp2LinkChange(evt) {
        this.input.p2Link = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp3LinkChange(evt) {
        this.input.p3Link = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp4LinkChange(evt) {
        this.input.p4Link = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp5LinkChange(evt) {
        this.input.p5Link = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onp6LinkChange(evt) {
        this.input.p6Link = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onftitleChange(evt) {
        this.input.tfitle = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onfpSourceChange(evt) {
        this.input.fpSource = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onCTAcontentsChange(evt) {
        this.input.CTAcontents = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onBBcontentsChange(evt) {
        this.input.BBcontents = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onBBLinkChange(evt) {
        this.input.BBLink = evt.target.value;
        this.onUpdate.emit(this.input);
    }
    onTMcontentsChange(evt) {
        this.input.TMcontents = evt.target.value;
        this.onUpdate.emit(this.input);
    }
}
