import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentactualComponent } from './investmentactual.component';

describe('InvestmentactualComponent', () => {
  let component: InvestmentactualComponent;
  let fixture: ComponentFixture<InvestmentactualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentactualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentactualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
