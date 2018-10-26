import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { One1Component } from './one1.component';

describe('One1Component', () => {
  let component: One1Component;
  let fixture: ComponentFixture<One1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ One1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(One1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
