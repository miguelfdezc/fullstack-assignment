import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { concatMap, take } from 'rxjs';


/**
 * TranslocoLocaleService
 * Handles transloco language updates by listening to authenticatiion
 * changes and using the user, locally set, or default language in each
 * case.
 * 
 * Local changes are set via localstorage using the "planet-lang" key
 */
@Injectable({
  providedIn: 'root'
})
export class TranslocoLocaleService {
  private localStorageKey = 'planet_lang';
  private userLang: string;
  private localLang: string;
  private defaultLang = 'en';

  constructor(
    private translocoService: TranslocoService,
  ) {
    this.updateLocalLanguage();
  }

  private updateLocalLanguage() {
    this.localLang = localStorage?.getItem?.(this.localStorageKey) || null;
    this.updateTransloco();
  }

  private updateTransloco() {
    const lang = this.getCurrentLanguage();
    this.translocoService.setActiveLang(lang);
  }

  private getBrowsersLanguage(): string {
    const browserLanguage = {
      'es-ES': 'es',
      'en-EN': 'en'
    }?.[navigator?.language];
    const lang = browserLanguage?.length
      ? browserLanguage
      : this.defaultLang;
    return lang;
  }

  getCurrentLanguage(): string {
    let currentLanguage = this.getBrowsersLanguage();    
    if (this.translocoService.isLang(this.localLang)) {currentLanguage = this.localLang;}
    if (this.translocoService.isLang(this.userLang)) {currentLanguage = this.userLang;}
    return currentLanguage;
  }

  setLocalLanguage(lang: string) {
    if (lang == null) {
      localStorage.removeItem(this.localStorageKey);
      this.updateLocalLanguage();
      return
    }

    if (this.translocoService.isLang(lang) === false) {return}
    localStorage.setItem(this.localStorageKey, lang);

    this.updateLocalLanguage();
  }
}
