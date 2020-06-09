import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonChildComponent } from './button-child.component';

describe('ButtonChildComponent', () => {
  let component: ButtonChildComponent;
  let fixture: ComponentFixture<ButtonChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
