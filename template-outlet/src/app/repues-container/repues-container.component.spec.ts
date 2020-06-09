import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuesContainerComponent } from './repues-container.component';

describe('RepuesContainerComponent', () => {
  let component: RepuesContainerComponent;
  let fixture: ComponentFixture<RepuesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
