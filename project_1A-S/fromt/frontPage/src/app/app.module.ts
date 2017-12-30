import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import { GroupProductPipe } from './service/pipe/group-product.pipe';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule ,HttpClient} from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './view/user/login/login.component';
import { HomeComponent } from './view/user/home/home.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { AlertModule, ModalModule } from 'ngx-bootstrap';
import { AuthGuard } from './service/sesion/index';
import { SharedService } from './service/sesion/shared.service';
import { RouterModule } from '@angular/router';
import { DataService } from './service/dataService/data.service';
import { RegisterComponent } from './view/user/register/register.component';
import { HomeAdminComponent } from './view/Admin/home-admin/home-admin.component';
import { CreateProductAdminComponent } from './view/Admin/create-product-admin/create-product-admin.component';
import { GroupProductComponent } from './view/Admin/group-product/group-product.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SelectModule} from 'angular2-select';
import { SectionProductComponent } from './view/Admin/section-product/section-product.component';
import { SubSectionProductComponent } from './view/Admin/sub-section-product/sub-section-product.component';
import { ArticleComponent } from './view/Admin/article/article.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HomeAdminComponent,
    CreateProductAdminComponent,
    GroupProductComponent,
    GroupProductPipe,
    SectionProductComponent,
    SubSectionProductComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SelectModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    Angular2FontawesomeModule,
     DataTableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ],
  providers: [
    AuthGuard,
    SharedService,
    DataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
