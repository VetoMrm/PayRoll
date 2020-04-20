import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejLeaveComponent } from './rej-leave.component';

describe('RejLeaveComponent', () => {
  let component: RejLeaveComponent;
  let fixture: ComponentFixture<RejLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
