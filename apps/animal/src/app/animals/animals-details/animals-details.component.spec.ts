import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsDetailsComponent } from './animals-details.component';

describe('AnimalsDetailsComponent', () => {
  let component: AnimalsDetailsComponent;
  let fixture: ComponentFixture<AnimalsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalsDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
