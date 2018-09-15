import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosViewComponent } from './tacos-view.component';

describe('TacosViewComponent', () => {
  let component: TacosViewComponent;
  let fixture: ComponentFixture<TacosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
