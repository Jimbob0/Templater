import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LineItemService } from "./line-item.service";
import { MainContainer }  from './main-container.component';
import { ApiService } from './api.service';
import { AuthService } from "./auth.service";
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@angular/router';
import { routes } from './routes';
import { FormsModule } from "@angular/forms";
import { AboutComponent } from './about.component';
import { AppComponent } from './app.component';
import { AuthComponent } from "./auth.component";
import { HostComponent } from "./host.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MainContainer, AppComponent, AboutComponent, AuthComponent, HostComponent ],
  bootstrap:    [ MainContainer ],
  providers:    [ LineItemService, ApiService, AuthService, ...HTTP_PROVIDERS, provideRouter(routes) ]
})
export class AppModule { }
