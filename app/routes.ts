import { RouterConfig } from '@angular/router';

import { AppComponent } from './app.component';

import { AboutComponent } from './about.component';

import { AuthComponent } from "./auth.component";
import { AuthService } from "./auth.service";

export const routes: RouterConfig = [
    {
        path: '',
        component: AppComponent,
        canActivate: [AuthService]
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    }
];

