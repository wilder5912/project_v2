import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { HomeComponent } from 'app/home/home.component';
import { RegisterComponent } from 'app/register/register.component';

import { AuthGuard } from './service/sesion/index';
const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'home', component: HomeComponent},
  { path : 'register', component: RegisterComponent},
  { path: '', component: HomeComponent },

  // otherwise redirect to home
  { path : '', redirectTo: '/home', pathMatch: 'full'},


];
//, canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
