import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldsCounterComponent } from './golds-counter.component';

describe('GoldsCounterComponent', () => {
  let component: GoldsCounterComponent;
  let fixture: ComponentFixture<GoldsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
