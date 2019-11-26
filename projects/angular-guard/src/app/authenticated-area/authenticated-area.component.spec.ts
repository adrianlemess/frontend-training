import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedAreaComponent } from './authenticated-area.component';

describe('AuthenticatedAreaComponent', () => {
  let component: AuthenticatedAreaComponent;
  let fixture: ComponentFixture<AuthenticatedAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatedAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
