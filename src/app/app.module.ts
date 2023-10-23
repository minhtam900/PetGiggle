import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { InputQuantityComponent } from './component/input-quantity/input-quantity.component';
import { FooterComponent } from './component/footer/footer.component';
import { CustomerViewHomeComponent } from './component/customer-view/customer-view-home/customer-view-home.component';
import { CustomerViewShoppingCartComponent } from './component/customer-view/customer-view-shopping-cart/customer-view-shopping-cart.component';
import { CustomerViewProductDetailComponent } from './component/customer-view/customer-view-product-detail/customer-view-product-detail.component';
import { AddUserComponent } from './component/admin-user-management/add-user/add-user.component';
import { AdminViewComponent } from './component/admin-view/admin-view.component';
import { AdminSidenavComponent } from './component/admin-view/admin-sidenav/admin-sidenav.component';
import { AdminBodyComponent } from './component/admin-view/admin-body/admin-body.component';
import { DashboardComponent } from './component/admin-view/dashboard/dashboard.component';
import { ProductListComponent } from './component/admin-view/product-management/product-list/product-list.component';
import { ProductCategoryListComponent } from './component/admin-view/product-management/product-category-list/product-category-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCategoryCreateComponent } from './component/admin-view/product-management/product-category-create/product-category-create.component';
import { AdminOrderListComponent } from './component/admin-view/admin-order-list/admin-order-list.component';
import { AdminUserListComponent } from './component/admin-view/user-management/admin-user-list/admin-user-list.component';
import { AdminCouponListComponent } from './component/admin-view/coupon-management/admin-coupon-list/admin-coupon-list.component';
import { AdminMessageComponent } from './component/admin-view/admin-message/admin-message.component';
import { AdminSettingComponent } from './component/admin-view/admin-setting/admin-setting.component';
import { UserCreateComponent } from './component/admin-view/user-management/user-create/user-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputQuantityComponent,
    FooterComponent,
    CustomerViewHomeComponent,
    CustomerViewShoppingCartComponent,
    CustomerViewProductDetailComponent,
    AddUserComponent,
    AdminViewComponent,
    AdminSidenavComponent,
    AdminBodyComponent,
    DashboardComponent,
    ProductListComponent,
    ProductCategoryListComponent,
    ProductCategoryCreateComponent,
    AdminOrderListComponent,
    AdminUserListComponent,
    AdminCouponListComponent,
    AdminMessageComponent,
    AdminSettingComponent,
    UserCreateComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
