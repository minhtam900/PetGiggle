import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMessageComponent } from 'src/app/component/admin-view/admin-message/admin-message.component';
import { AdminOrderListComponent } from 'src/app/component/admin-view/admin-order-list/admin-order-list.component';
import { AdminSettingComponent } from 'src/app/component/admin-view/admin-setting/admin-setting.component';
import { AdminViewComponent } from 'src/app/component/admin-view/admin-view.component';
import { AdminCouponListComponent } from 'src/app/component/admin-view/coupon-management/admin-coupon-list/admin-coupon-list.component';
import { DashboardComponent } from 'src/app/component/admin-view/dashboard/dashboard.component';
import { ProductCategoryCreateComponent } from 'src/app/component/admin-view/product-management/product-category-create/product-category-create.component';
import { ProductCategoryListComponent } from 'src/app/component/admin-view/product-management/product-category-list/product-category-list.component';
import { ProductCreateComponent } from 'src/app/component/admin-view/product-management/product-create/product-create.component';
import { ProductListComponent } from 'src/app/component/admin-view/product-management/product-list/product-list.component';
import { AdminUserListComponent } from 'src/app/component/admin-view/user-management/admin-user-list/admin-user-list.component';
import { UserCreateComponent } from 'src/app/component/admin-view/user-management/user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: AdminViewComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'category', component: ProductCategoryListComponent },
      { path: 'order', component: AdminOrderListComponent },
      { path: 'user', component: AdminUserListComponent },
      { path: 'coupon', component: AdminCouponListComponent },
      { path: 'message', component: AdminMessageComponent },
      { path: 'setting', component: AdminSettingComponent },
      { path: 'product-create', component: ProductCreateComponent },
      { path: 'category-create', component: ProductCategoryCreateComponent },
      { path: 'user-create', component: UserCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
