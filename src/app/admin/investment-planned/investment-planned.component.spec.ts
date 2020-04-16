import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPlannedComponent } from './investment-planned.component';

describe('InvestmentPlannedComponent', () => {
  let component: InvestmentPlannedComponent;
  let fixture: ComponentFixture<InvestmentPlannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentPlannedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPlannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
