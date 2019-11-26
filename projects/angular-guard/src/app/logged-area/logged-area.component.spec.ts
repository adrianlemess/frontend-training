import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedAreaComponent } from './logged-area.component';

describe('LoggedAreaComponent', () => {
  let component: LoggedAreaComponent;
  let fixture: ComponentFixture<LoggedAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
