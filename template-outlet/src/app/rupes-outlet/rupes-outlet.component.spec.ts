import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RupesOutletComponent } from './rupes-outlet.component';

describe('RupesOutletComponent', () => {
  let component: RupesOutletComponent;
  let fixture: ComponentFixture<RupesOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RupesOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RupesOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
