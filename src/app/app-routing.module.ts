import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';

const routes: Routes = [
  {path:'user',component: UserComponentComponent},
  {path:'product', component:ProductComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
