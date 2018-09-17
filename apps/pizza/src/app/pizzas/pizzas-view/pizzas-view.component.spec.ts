import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasViewComponent } from './pizzas-view.component';

describe('PizzasViewComponent', () => {
  let component: PizzasViewComponent;
  let fixture: ComponentFixture<PizzasViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
