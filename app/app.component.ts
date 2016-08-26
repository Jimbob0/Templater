import { Component } from '@angular/core';
import { LineItemComponent } from './line-item.component';
import { LineItemService } from './line-item.service';

@Component({
  selector: 'my-app',
  directives: [LineItemComponent],
  template: `
    <div class="container">
      <h1>Page Creation</h1>
      <line-item
        *ngFor="let item of lineItemService.items"
        [input]="item"
        (onUpdate)="updateItem(item._id, $event)"
        (onDelete)="deleteItem(item._id)"
      ></line-item>
      <button class="btn btn-success" (click)="createNewItem()">New Page</button>
      <button class="btn btn-success" (click)="postNewItem()">Post</button>
    </div>
  `,
  styles: [`
    .total {
      padding: 20px;
    }
    .title {
      text-align: center;
      font-weight: bold;
    }
  `]
})
export class AppComponent {


  constructor(private lineItemService: LineItemService) {
  }

  createNewItem() {
    this.lineItemService.createNewItem().subscribe();
  }

  deleteItem(id) {
    this.lineItemService.deleteItem(id).subscribe();
  }

  updateItem(id, newValue) {
    this.lineItemService.updateItem(id, newValue).subscribe();
  }
}

