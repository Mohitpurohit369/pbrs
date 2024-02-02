import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyFoodComponent } from './baby-food.component';

const routes: Routes = [
  {path:'',component:BabyFoodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BabyFoodRoutingModule { }
