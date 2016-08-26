import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'line-item',
    styles: [`
        .line-item {
            margin-bottom: 1em;
        }
    `],
    template: `
        <div class="row line-item">
            <div class="col-xs-2">
                <input
                    class="form-control"
                    type="text"
                    placeholder="description"
                    [ngModel]="input.description"
                    (keyup)="onDescriptionChange($event)"
                />
            </div>
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

    onDescriptionChange(evt) {
        this.input.description = evt.target.value;
        this.onUpdate.emit(this.input);
    }
}
