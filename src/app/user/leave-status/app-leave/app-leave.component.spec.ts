import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLeaveComponent } from './app-leave.component';

describe('AppLeaveComponent', () => {
  let component: AppLeaveComponent;
  let fixture: ComponentFixture<AppLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
