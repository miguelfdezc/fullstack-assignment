import { Component } from '@angular/core';
import { TranslocoLocaleService } from './transloco/transloco-root.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translocoLocaleService: TranslocoLocaleService,
  ) {}
}
