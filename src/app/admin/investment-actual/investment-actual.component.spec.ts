import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentActualComponent } from './investment-actual.component';

describe('InvestmentActualComponent', () => {
  let component: InvestmentActualComponent;
  let fixture: ComponentFixture<InvestmentActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
