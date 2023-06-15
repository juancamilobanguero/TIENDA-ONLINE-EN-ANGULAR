import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produc2Component } from './produc2.component';

describe('Produc2Component', () => {
  let component: Produc2Component;
  let fixture: ComponentFixture<Produc2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Produc2Component]
    });
    fixture = TestBed.createComponent(Produc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
