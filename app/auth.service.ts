import { Injectable } from "@angular/core";

import { ApiService } from "./api.service";

import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {

    public authenticated: boolean = false;

    public user: Object;

    constructor(
        private router: Router,
        private apiService: ApiService
    ) {}

    authenticate(path: string, creds: Object) {
        return this.apiService.post('/' + path, JSON.stringify(creds))
            .do(function(response) {
                if (response.status === "success") {
                    this.authenticated = true;
                    this.user = response.userInfo;
                }
            }.bind(this));
    }

    deauthenticate() {
        this.authenticated = false;
        this.user = null;
        this.router.navigate(['auth']);
    }

    canActivate(): boolean {
        if (!this.authenticated) {
            this.router.navigate(['auth']);
        }
        return this.authenticated;
    }


}
