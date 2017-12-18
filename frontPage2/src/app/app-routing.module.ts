import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/view/login/login.component';
import { HomeComponent } from 'app/view/home/home.component';
import { RegisterComponent } from 'app/view/register/register.component';
import { HomeAdminComponent } from 'app/view/home-admin/home-admin.component';
import { CreateProductAdminComponent } from 'app/view/create-product-admin/create-product-admin.component';


import { AuthGuard } from './service/sesion/index';
const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'home', component: HomeComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'homeAdmin', component: HomeAdminComponent},
  { path : 'produtoCreate', component: CreateProductAdminComponent},
  { path: '', component: HomeComponent },
  { path : '', redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
