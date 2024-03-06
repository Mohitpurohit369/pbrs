import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: "",
    component: ContentLayoutComponent,
    children: [
      {
      path: 'home',
      loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'category',
      loadChildren: () => import('./component/category/category.module').then(m => m.CategoryModule)
    },
    {
      path: 'product',
      loadChildren: () => import('./component/product/product.module').then(m => m.ProductModule)
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
