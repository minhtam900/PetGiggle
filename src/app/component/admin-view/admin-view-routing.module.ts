import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';



const routes: Routes=[
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }