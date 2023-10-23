import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/admin-view/dashboard/dashboard.component';
import { ProductCategoryListComponent } from './component/admin-view/product-management/product-category-list/product-category-list.component';
import { AdminOrderListComponent } from './component/admin-view/admin-order-list/admin-order-list.component';
import { AdminUserListComponent } from './component/admin-view/user-management/admin-user-list/admin-user-list.component';
import { AdminCouponListComponent } from './component/admin-view/coupon-management/admin-coupon-list/admin-coupon-list.component';
import { AdminMessageComponent } from './component/admin-view/admin-message/admin-message.component';
import { AdminSettingComponent } from './component/admin-view/admin-setting/admin-setting.component';
import { ProductListComponent } from './component/admin-view/product-management/product-list/product-list.component';
import { ProductCreateComponent } from './component/admin-view/product-management/product-create/product-create.component';
import { ProductCategoryCreateComponent } from './component/admin-view/product-management/product-category-create/product-category-create.component';
import { UserCreateComponent } from './component/admin-view/user-management/user-create/user-create.component';
import { LoginComponent } from './component/login/login.component';
import { AdminViewComponent } from './component/admin-view/admin-view.component';
import { AdminModule } from './module/admin/admin.module';


const routes: Routes=[
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'admin', 
  loadChildren: () => 
    import('./module/admin/admin.module').then((m) => m.AdminModule)},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
