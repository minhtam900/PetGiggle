import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { InputQuantityComponent } from './component/input-quantity/input-quantity.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminCategoryComponent } from './component/admin-product-management/admin-category/admin-category.component';
import { ProductManagementComponent } from './component/admin-product-management/product-management/product-management.component';
import { CustomerViewHomeComponent } from './component/customer-view/customer-view-home/customer-view-home.component';
import { CustomerViewShoppingCartComponent } from './component/customer-view/customer-view-shopping-cart/customer-view-shopping-cart.component';
import { CustomerViewProductDetailComponent } from './component/customer-view/customer-view-product-detail/customer-view-product-detail.component';
import { ProductCategoryComponent } from './component/admin-product-management/product-category/product-category.component';
import { AddProductCategoryComponent } from './component/admin-product-management/add-product-category/add-product-category.component';
import { UserManagementComponent } from './component/admin-user-management/user-management/user-management.component';
import { AddUserComponent } from './component/admin-user-management/add-user/add-user.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputQuantityComponent,
    FooterComponent,
    AdminCategoryComponent,
    ProductManagementComponent,
    CustomerViewHomeComponent,
    CustomerViewShoppingCartComponent,
    CustomerViewProductDetailComponent,
    ProductCategoryComponent,
    AddProductCategoryComponent,
    UserManagementComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
