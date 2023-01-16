import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangToggleComponent } from './lang-toggle.component';

describe('LangToggleComponent', () => {
  let component: LangToggleComponent;
  let fixture: ComponentFixture<LangToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
