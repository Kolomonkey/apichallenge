import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsViewComponent } from './snippets-view.component';

describe('SnippetsViewComponent', () => {
  let component: SnippetsViewComponent;
  let fixture: ComponentFixture<SnippetsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
