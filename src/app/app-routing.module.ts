import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/admin-view/dashboard/dashboard.component';
import { ProductCategoryListComponent } from './component/admin-view/product-management/product-category-list/product-category-list.component';
import { AdminOrderListComponent } from './component/admin-view/admin-order-list/admin-order-list.component';
import { AdminUserListComponent } from './component/admin-view/admin-user-list/admin-user-list.component';
import { AdminCouponListComponent } from './component/admin-view/coupon-management/admin-coupon-list/admin-coupon-list.component';
import { AdminMessageComponent } from './component/admin-view/admin-message/admin-message.component';
import { AdminSettingComponent } from './component/admin-view/admin-setting/admin-setting.component';
import { ProductListComponent } from './component/admin-view/product-management/product-list/product-list.component';
import { ProductCreateComponent } from './component/admin-view/product-management/product-create/product-create.component';
import { ProductCategoryCreateComponent } from './component/admin-view/product-management/product-category-create/product-category-create.component';


const routes: Routes=[
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'product', component: ProductListComponent},
  { path: 'category', component: ProductCategoryListComponent},
  { path: 'order', component: AdminOrderListComponent},
  { path: 'user', component: AdminUserListComponent},
  { path: 'coupon', component: AdminCouponListComponent},
  { path: 'message', component: AdminMessageComponent},
  { path: 'setting', component: AdminSettingComponent},
  { path: 'product-create', component: ProductCreateComponent},
  { path: 'category-create', component: ProductCategoryCreateComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
