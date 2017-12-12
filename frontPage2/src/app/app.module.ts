import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AlertModule } from 'ngx-bootstrap';
import { AuthGuard } from './service/sesion/index';
import {SharedService } from './service/sesion/shared.service';
import { RouterModule } from '@angular/router';
import { DataService } from './service/dataService/data.service';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,

  ],
  providers: [
    AuthGuard,
    SharedService,
    DataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
