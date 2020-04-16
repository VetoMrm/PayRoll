import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerootComponent } from './employeeroot.component';

describe('EmployeerootComponent', () => {
  let component: EmployeerootComponent;
  let fixture: ComponentFixture<EmployeerootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeerootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
