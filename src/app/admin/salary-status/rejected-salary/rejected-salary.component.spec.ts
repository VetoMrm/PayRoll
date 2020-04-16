import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedSalaryComponent } from './rejected-salary.component';

describe('RejectedSalaryComponent', () => {
  let component: RejectedSalaryComponent;
  let fixture: ComponentFixture<RejectedSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
