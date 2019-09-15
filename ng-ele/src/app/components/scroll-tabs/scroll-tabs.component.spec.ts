import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTabsComponent } from './scroll-tabs.component';

describe('ScrollTabsComponent', () => {
  let component: ScrollTabsComponent;
  let fixture: ComponentFixture<ScrollTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
