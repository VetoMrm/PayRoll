import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserleaveRootComponent } from './userleave-root.component';

describe('UserleaveRootComponent', () => {
  let component: UserleaveRootComponent;
  let fixture: ComponentFixture<UserleaveRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserleaveRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserleaveRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
