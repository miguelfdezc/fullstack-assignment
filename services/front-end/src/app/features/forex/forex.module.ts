import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForexLandingPageComponent } from './pages/forex-landing-page/forex-landing-page.component';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { routes } from './forex.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/forex.${lang}.json`);
  return acc;
}, {});

@NgModule({
  declarations: [
    ForexLandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslocoModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'forex',
        loader
      }
    }
  ],
})
export class ForexModule { }
