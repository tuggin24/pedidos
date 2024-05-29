import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoginButtonsComponent } from './no-login-buttons.component';

describe('NoLoginButtonsComponent', () => {
  let component: NoLoginButtonsComponent;
  let fixture: ComponentFixture<NoLoginButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoLoginButtonsComponent]
    });
    fixture = TestBed.createComponent(NoLoginButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
