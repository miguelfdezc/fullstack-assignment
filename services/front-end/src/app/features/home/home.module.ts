import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { routes } from './home.routing';
import { MarkdownModule } from 'ngx-markdown';


export const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/home.${lang}.json`);
  return acc;
}, {});

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslocoModule,
    MarkdownModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'home',
        loader
      }
    }
  ],
})
export class HomeModule { }
