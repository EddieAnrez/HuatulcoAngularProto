import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangbarComponent } from './langbar.component';

describe('LangbarComponent', () => {
  let component: LangbarComponent;
  let fixture: ComponentFixture<LangbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
