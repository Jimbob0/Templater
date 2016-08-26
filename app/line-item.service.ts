import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable()
export class LineItemService {
    items = [];

    constructor(private apiService: ApiService) {
        console.log("hey constructor is running");
        this.getAllItems().subscribe();
    }

    getAllItems() {
        return this.apiService.get("/all")
            .do(function(res) {
                this.items = res;
            }.bind(this));
    }

    createNewItem() {
        console.log("called create new item");
        return this.apiService.post("/create", JSON.stringify({
            item : {
                contents: "",
                title: ""
            }
        })).do(function(res) {
            console.log("called callback for creating item");
            this.items.push(res);
        }.bind(this));
    }

    deleteItem(_id) {
        return this.apiService.post("/delete", JSON.stringify({
            _id: _id
        })).do(function(res) {
            this.items = res;
        }.bind(this));
    }

    updateItem(_id, newValue) {
        return this.apiService.post("/update", JSON.stringify({
            _id: _id,
            item: newValue
        })).do(function(res){
            this.overwrite(this.findItemBy_id(_id), res);
        }.bind(this));
    }

    findItemById(_id): Object {
        for (let item of this.items) {
            if (item._id === _id) {
                return item;
            }
        }
        return null;
    }

    overwrite(orig, newValues) {
        for (let i in newValues) {
            if (newValues.hasOwnProperty(i)) {
                orig[i] = newValues[i];
            }
        }
    }

}
