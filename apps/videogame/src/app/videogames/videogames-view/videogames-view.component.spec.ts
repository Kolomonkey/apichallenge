import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesViewComponent } from './videogames-view.component';

describe('VideogamesViewComponent', () => {
  let component: VideogamesViewComponent;
  let fixture: ComponentFixture<VideogamesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideogamesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogamesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
