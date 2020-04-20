import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryRootComponent } from './salary-root.component';

describe('SalaryRootComponent', () => {
  let component: SalaryRootComponent;
  let fixture: ComponentFixture<SalaryRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
