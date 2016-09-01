import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable()
export class HostService {
    items = [];

    constructor(private apiService: ApiService) {
        console.log("hey constructor is running");
        // this.getHostItems(_id).subscribe();
    }

    getHostItems(_id) {
        console.log(_id"service");
        return this.apiService.post("/one", JSON.stringify({
            _id: _id
        }))
            .do(function(res) {
                this.items = res;
            }.bind(this));
    }
}
