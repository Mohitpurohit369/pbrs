import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { GroceryComponent } from './grocery/grocery.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    GroceryComponent,
    AgricultureComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
