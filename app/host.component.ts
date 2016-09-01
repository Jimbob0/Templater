import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { LineItemService } from './line-item.service';

@Component({
    template: `
        <div>
            <p>
                This service allows you to create your own webpage by filling the appropriate input fields with content, image links, or website links. The data is stored and you can update it whenever you log in. 
                <br>
                <br>
                To start a new project hit the new page button at the bottom of the home page. 
                <br>
                <br>
                There are two buttons at the bottom of every template: 
                <br> 
                <br>
                Host creates you webpage using the data you have inputed. The service will send you to a url on the with the data you inputed displayed. This url is the address for your new webpage. 
                <br> 
                <br>
                Delete removes that template and all inputed data from the server and the URL for that page will be removed.
                <br>
                <br>
                This service was created by James Neal as the final project for the full-time full-stack web development course at CodeCraft.
            </p>
        </div>
    `
})
export class HostComponent implements OnInit {

    private sub: Subscription;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: LineItemService
        ) {}
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
           let id = +params['id'];
           this.service.getHostItems(id);
        });
    }
}
