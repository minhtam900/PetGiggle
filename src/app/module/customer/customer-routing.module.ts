import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerViewHomeComponent } from 'src/app/component/customer-view/customer-view-home/customer-view-home.component';
import { CustomerViewShopComponent } from 'src/app/component/customer-view/customer-view-shop/customer-view-shop.component';
import { CustomerViewShoppingCartComponent } from 'src/app/component/customer-view/customer-view-shopping-cart/customer-view-shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CustomerViewHomeComponent },
  { path: 'shop', component: CustomerViewShopComponent },
  { path: 'cart', component: CustomerViewShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
