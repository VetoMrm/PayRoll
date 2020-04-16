import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedSalaryComponent } from './approved-salary.component';

describe('ApprovedSalaryComponent', () => {
  let component: ApprovedSalaryComponent;
  let fixture: ComponentFixture<ApprovedSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
