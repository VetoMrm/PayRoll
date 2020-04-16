import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryStatusRootComponent } from './salary-status-root.component';

describe('SalaryStatusRootComponent', () => {
  let component: SalaryStatusRootComponent;
  let fixture: ComponentFixture<SalaryStatusRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryStatusRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryStatusRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
