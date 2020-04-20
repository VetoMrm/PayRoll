import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestplannedComponent } from './investplanned.component';

describe('InvestplannedComponent', () => {
  let component: InvestplannedComponent;
  let fixture: ComponentFixture<InvestplannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestplannedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestplannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
