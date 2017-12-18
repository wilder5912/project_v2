import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AlertModule } from 'ngx-bootstrap';
import { AuthGuard } from './service/sesion/index';
import {SharedService } from './service/sesion/shared.service';
import { RouterModule } from '@angular/router';
import { DataService } from './service/dataService/data.service';
import { RegisterComponent } from './view/register/register.component';
import { HomeAdminComponent } from './view/home-admin/home-admin.component';
import { CreateProductAdminComponent } from './view/create-product-admin/create-product-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HomeAdminComponent,
    CreateProductAdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,
    Angular2FontawesomeModule
  ],
  providers: [
    AuthGuard,
    SharedService,
    DataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
