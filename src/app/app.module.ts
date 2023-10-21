import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { InputQuantityComponent } from './component/input-quantity/input-quantity.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductManagementComponent } from './component/admin-product-management/product-management/product-management.component';
import { CustomerViewHomeComponent } from './component/customer-view/customer-view-home/customer-view-home.component';
import { CustomerViewShoppingCartComponent } from './component/customer-view/customer-view-shopping-cart/customer-view-shopping-cart.component';
import { CustomerViewProductDetailComponent } from './component/customer-view/customer-view-product-detail/customer-view-product-detail.component';
import { ProductCategoryComponent } from './component/admin-product-management/product-category/product-category.component';
import { AddProductCategoryComponent } from './component/admin-product-management/add-product-category/add-product-category.component';
import { UserManagementComponent } from './component/admin-user-management/user-management/user-management.component';
import { AddUserComponent } from './component/admin-user-management/add-user/add-user.component';
import { AdminViewComponent } from './component/admin-view/admin-view.component';
import { AdminSidenavComponent } from './component/admin-view/admin-sidenav/admin-sidenav.component';
import { AdminBodyComponent } from './component/admin-view/admin-body/admin-body.component';
import { DashboardComponent } from './component/admin-view/dashboard/dashboard.component';
import { ProductListComponent } from './component/admin-view/product-management/product-list/product-list.component';
import { ProductCategoryListComponent } from './component/admin-view/product-management/product-category-list/product-category-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputQuantityComponent,
    FooterComponent,
    ProductManagementComponent,
    CustomerViewHomeComponent,
    CustomerViewShoppingCartComponent,
    CustomerViewProductDetailComponent,
    ProductCategoryComponent,
    AddProductCategoryComponent,
    UserManagementComponent,
    AddUserComponent,
    AdminViewComponent,
    AdminSidenavComponent,
    AdminBodyComponent,
    DashboardComponent,
    ProductListComponent,
    ProductCategoryListComponent
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
