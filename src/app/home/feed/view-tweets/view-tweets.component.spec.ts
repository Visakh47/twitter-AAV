import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTweetsComponent } from './view-tweets.component';

describe('ViewTweetsComponent', () => {
  let component: ViewTweetsComponent;
  let fixture: ComponentFixture<ViewTweetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTweetsComponent]
    });
    fixture = TestBed.createComponent(ViewTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
