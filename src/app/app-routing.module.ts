import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ProductManagementComponent } from './component/admin-product-management/product-management/product-management.component';
import { AddProductCategoryComponent } from './component/admin-product-management/add-product-category/add-product-category.component';
import { ProductCategoryComponent } from './component/admin-product-management/product-category/product-category.component';
import { DashboardComponent } from './component/admin-view/dashboard/dashboard.component';


const routes: Routes=[
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'product', component: DashboardComponent},
  { path: 'category', component: DashboardComponent},
  { path: 'order', component: DashboardComponent},
  { path: 'user', component: DashboardComponent},
  { path: 'coupon', component: DashboardComponent},
  { path: 'message', component: DashboardComponent},
  { path: 'setting', component: DashboardComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
