import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ContentLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ContentLayoutComponent]
})
export class SharedModule { }
