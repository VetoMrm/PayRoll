import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRejectsalaryComponent } from './approve-rejectsalary.component';

describe('ApproveRejectsalaryComponent', () => {
  let component: ApproveRejectsalaryComponent;
  let fixture: ComponentFixture<ApproveRejectsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveRejectsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRejectsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
