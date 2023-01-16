import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// material

// own
import { MainLayoutComponent } from './components/main-layout/main-layout.component';


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // material
  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class LayoutModule { }
