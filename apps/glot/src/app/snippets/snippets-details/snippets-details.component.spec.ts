import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsDetailsComponent } from './snippets-details.component';

describe('SnippetsDetailsComponent', () => {
  let component: SnippetsDetailsComponent;
  let fixture: ComponentFixture<SnippetsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
