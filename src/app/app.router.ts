import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { ReportsComponent } from "./reports/reports.component";

export const router : Routes = [
    {path: '', redirectTo:'login', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'about', component: AboutComponent},
    {path: 'reports', component: ReportsComponent}
]; 

export const routes : ModuleWithProviders = RouterModule.forRoot(router);
