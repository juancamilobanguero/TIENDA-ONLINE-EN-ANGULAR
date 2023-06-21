import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptosComponent } from './laptos.component';

describe('LaptosComponent', () => {
  let component: LaptosComponent;
  let fixture: ComponentFixture<LaptosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaptosComponent]
    });
    fixture = TestBed.createComponent(LaptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
