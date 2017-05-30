import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ChartsModule } from "ng2-charts";
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ReportsComponent } from './reports/reports.component';

import { routes } from "./app.router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
