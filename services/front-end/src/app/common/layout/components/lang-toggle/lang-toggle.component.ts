import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { TranslocoLocaleService } from 'src/app/transloco/transloco-root.module';


@Component({
  selector: 'app-lang-toggle',
  templateUrl: './lang-toggle.component.html',
  styleUrls: ['./lang-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LangToggleComponent implements OnDestroy {
  currentLang: string;
  private subscriptions: Subscription[];

  constructor(
    private translocoService: TranslocoService,
    private translocoLocaleService: TranslocoLocaleService,
  ) {
    this.subscriptions = [
      this.translocoService.langChanges$.subscribe(
        this.onLangChanges.bind(this)
      )
    ]
  }

  ngOnDestroy(): void {
    this.removeSubscriptions();
  }

  private removeSubscriptions() {
    this.subscriptions.forEach((s: Subscription) => {
      s.unsubscribe();
    })
  }

  onLangChanges(lang: string) {
    this.currentLang = lang;
  }

  setLocalLanguage(lang: string) {
    this.translocoLocaleService.setLocalLanguage(lang);
  }
}
