import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/user/login/login.component';
import { HomeComponent } from './view/user/home/home.component';
import { RegisterComponent } from './view/user/register/register.component';
import { HomeAdminComponent } from './view/Admin/home-admin/home-admin.component';
import { CreateProductAdminComponent } from './view/Admin/create-product-admin/create-product-admin.component';
import { GroupProductComponent } from './view/Admin/group-product/group-product.component';
import { SectionProductComponent } from './view/Admin/section-product/section-product.component';
import { SubSectionProductComponent } from './view/Admin/sub-section-product/sub-section-product.component';
import { CreateBannerComponent } from './view/Admin/create-banner/create-banner.component';
import { ArticleComponent } from './view/Admin/article/article.component';
import { LoginAndRegisterComponent } from './view/user/login-and-register/login-and-register.component';
import { ListArticleComponent } from './view/bodyPage/list-article/list-article.component';
import { InformationPageComponent } from './view/bodyPage/information-page/information-page.component';
import { BlogPageComponent } from './view/bodyPage/blog-page/blog-page.component';
import { ArticleDetailComponent } from './view/bodyPage/article-detail/article-detail.component';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'home', component: HomeComponent},
  { path : 'loginRegister', component: LoginAndRegisterComponent},
  { path : 'ListArticle/:id', component: ListArticleComponent},
  { path : 'articleDetail/:id', component: ArticleDetailComponent},
  { path : 'createBanner', component: CreateBannerComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'information', component: InformationPageComponent},
  { path : 'blog', component: BlogPageComponent},
  { path : 'homeAdmin', component: HomeAdminComponent},
  { path : 'groupProduct', component: GroupProductComponent},
  { path : 'sectionProduct', component: SectionProductComponent},
  { path : 'subSectionProduct', component: SubSectionProductComponent},
  { path : 'acticle', component: ArticleComponent},
  { path : 'productCreate', component: CreateProductAdminComponent},
  { path: '', component: HomeComponent },
  { path : '', redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
