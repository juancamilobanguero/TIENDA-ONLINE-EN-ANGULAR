import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecisionComponent } from './secision.component';

describe('SecisionComponent', () => {
  let component: SecisionComponent;
  let fixture: ComponentFixture<SecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecisionComponent]
    });
    fixture = TestBed.createComponent(SecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
