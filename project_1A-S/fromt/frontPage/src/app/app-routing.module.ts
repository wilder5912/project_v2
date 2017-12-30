import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/view/user/login/login.component';
import { HomeComponent } from 'app/view/user/home/home.component';
import { RegisterComponent } from 'app/view/user/register/register.component';
import { HomeAdminComponent } from 'app/view/Admin/home-admin/home-admin.component';
import { CreateProductAdminComponent } from 'app/view/Admin/create-product-admin/create-product-admin.component';
import { GroupProductComponent } from 'app/view/Admin/group-product/group-product.component';
import { SectionProductComponent } from 'app/view/Admin/section-product/section-product.component';
import { SubSectionProductComponent } from 'app/view/Admin/sub-section-product/sub-section-product.component';
import { ArticleComponent } from 'app/view/Admin/article/article.component';


import { AuthGuard } from './service/sesion/index';
const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'home', component: HomeComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'homeAdmin', component: HomeAdminComponent},
  { path : 'groupProduct', component: GroupProductComponent},
  { path : 'sectionProduct', component: SectionProductComponent},
  { path : 'subSectionProduct', component: SubSectionProductComponent},
  { path : 'acticle', component: ArticleComponent},
  { path : 'produtoCreate', component: CreateProductAdminComponent},
  { path: '', component: HomeComponent },
  { path : '', redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
