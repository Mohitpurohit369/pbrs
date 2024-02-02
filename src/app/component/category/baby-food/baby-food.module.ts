import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BabyFoodRoutingModule } from './baby-food-routing.module';
import { BabyFoodComponent } from './baby-food.component';
import { RouterModule } from '@angular/router';
import { BabyFoodRoutingModule } from './baby-food-routing.module';


@NgModule({
  declarations: [
    BabyFoodComponent
  ],
  imports: [
    CommonModule,
    BabyFoodRoutingModule,
    RouterModule,
  ]
})
export class BabyFoodModule { }
