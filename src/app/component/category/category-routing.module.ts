import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { BabyFoodComponent } from './baby-food/baby-food.component';
// import { BabyFoodCerealsComponent } from './Baby-food/baby-food-cereals/baby-food-cereals.component';


const routes: Routes = [
  
  {
    path: "",
    component: CategoryComponent,
    children: [
      {
      path: '',
      loadChildren: () => import('./baby-food/baby-food.module').then(m => m.BabyFoodModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }
  ]
  
}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryRoutingModule { }
