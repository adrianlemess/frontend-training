import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View403Component } from './view403.component';

describe('View403Component', () => {
  let component: View403Component;
  let fixture: ComponentFixture<View403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
