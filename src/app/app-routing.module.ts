import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ProductManagementComponent } from './component/admin-product-management/product-management/product-management.component';
import { AddProductCategoryComponent } from './component/admin-product-management/add-product-category/add-product-category.component';
import { ProductCategoryComponent } from './component/admin-product-management/product-category/product-category.component';


const routes: Routes=[
  { path: 'product',  component: ProductManagementComponent},
  { 
    path: 'category', component: ProductCategoryComponent,
    children: [
      {path: 'create', component: AddProductCategoryComponent }
    ]
  },

  
    
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
