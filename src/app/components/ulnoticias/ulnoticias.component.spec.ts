import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlnoticiasComponent } from './ulnoticias.component';

describe('UlnoticiasComponent', () => {
  let component: UlnoticiasComponent;
  let fixture: ComponentFixture<UlnoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlnoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
