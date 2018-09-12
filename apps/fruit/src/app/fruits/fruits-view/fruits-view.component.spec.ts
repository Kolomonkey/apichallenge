import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsViewComponent } from './fruits-view.component';

describe('FruitsViewComponent', () => {
  let component: FruitsViewComponent;
  let fixture: ComponentFixture<FruitsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
