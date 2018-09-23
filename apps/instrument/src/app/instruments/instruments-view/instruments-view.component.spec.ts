import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsViewComponent } from './instruments-view.component';

describe('InstrumentsViewComponent', () => {
  let component: InstrumentsViewComponent;
  let fixture: ComponentFixture<InstrumentsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
