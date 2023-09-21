import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { TweetComponent } from './tweet/tweet.component';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedComponent],
      imports:[TweetComponent]
    });
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
