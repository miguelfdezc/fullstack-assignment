import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// material
import { MatButtonModule } from '@angular/material/button'; 
// own
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { TranslocoRootModule } from 'src/app/transloco/transloco-root.module';
import { LangToggleComponent } from './components/lang-toggle/lang-toggle.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    LangToggleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslocoRootModule,
    // material
    MatButtonModule,
  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class LayoutModule { }
