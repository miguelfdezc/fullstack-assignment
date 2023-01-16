import { TestBed } from '@angular/core/testing';

import { TranslocoLocaleService } from './transloco-locale.service';

describe('TranslocoLocaleService', () => {
  let service: TranslocoLocaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslocoLocaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
