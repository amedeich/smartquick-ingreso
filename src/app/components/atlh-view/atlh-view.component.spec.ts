import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlhViewComponent } from './atlh-view.component';

describe('AtlhViewComponent', () => {
  let component: AtlhViewComponent;
  let fixture: ComponentFixture<AtlhViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlhViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlhViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
