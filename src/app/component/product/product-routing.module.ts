import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { GroceryComponent } from './grocery/grocery.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
 {path:"",component:ProductComponent},
 {
  path: 'grocery',
  component:GroceryComponent
},
{
  path: 'agriculture',
  component:AgricultureComponent
},
{
  path: 'sevices',
  component:ServicesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
