import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { HostService } from './host.service';

@Component({
    template: `
        <div class="container">

        <!-- Marketing Icons Section -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    {{service.items.title}}
                </h1>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>
                            {{service.items.b1title}}
                        </h4>
                    </div>
                    <div class="panel-body">
                        {{service.items.b1contents}}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>
                            {{service.items.b2title}}
                        </h4>
                    </div>
                    <div class="panel-body">
                        {{service.items.b2contents}}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>
                            {{service.items.b3title}}
                        </h4>
                    </div>
                    <div class="panel-body">
                        {{service.items[0].b3contents}}
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->

        <!-- Portfolio Section -->
        <div class="row">
            <div class="col-lg-12">
                <h2 class="page-header">
                {{service.items.ptitle}}
                </h2>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="{{service.items.p1Link}}">
                    <img class="img-responsive img-portfolio img-hover" src="{{service.items.p1Source}}" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="{{service.items.p2Link}}">
                    <img class="img-responsive img-portfolio img-hover" src="{{service.items.p2Source}}" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="{{service.items.p3Link}}">
                    <img class="img-responsive img-portfolio img-hover" src="{{service.items.p3Source}}" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="{{service.items.p4Link}}">
                    <img class="img-responsive img-portfolio img-hover" src="{{service.items.p4Source}}" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="{{service.items.p5Link}}">
                    <img class="img-responsive img-portfolio img-hover" src="{{service.items.p5Source}}" alt="">
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="{{service.items.p6Link}}">
                    <img class="img-responsive img-portfolio img-hover" src="{{service.items.p6Source}}" alt="">
                </a>
            </div>
        </div>
        <!-- /.row -->

        <!-- Features Section -->
        <div class="row">
            <div class="col-lg-12">
                <h2 class="page-header">
                    {{service.items.ftitle}}
                </h2>
            </div>
            <div class="col-md-6">
                {{service.items.contents}}
            </div>
            <div class="col-md-6">
                <img class="img-responsive" src="{{service.items.fpSource}}" alt="">
            </div>
        </div>
        <!-- /.row -->

        <hr>

        <!-- Call to Action Section -->
        <div class="well">
            <div class="row">
                <div class="col-md-8">
                    {{service.items.CTAcontents}}
                </div>
                <div class="col-md-4">
                    <a class="btn btn-lg btn-default btn-block" href="{{service.items.BBLink}}">
                        {{service.items.BBcontents}}
                    </a>
                </div>
            </div>
        </div>

        <hr>
        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    {{service.items.TMcontent}}
                </div>
            </div>
        </footer>
    </div>
    `
})
export class HostComponent {
    private sub: Subscription;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HostService
        ) {
            this.sub = this.route.params.subscribe(params => {
               let id = params['id'];
               console.log(id);
               this.service.getHostItems(id).subscribe();
            });
        console.log(service);
    }
}
