import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaverootComponent } from './leaveroot.component';

describe('LeaverootComponent', () => {
  let component: LeaverootComponent;
  let fixture: ComponentFixture<LeaverootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaverootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaverootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
