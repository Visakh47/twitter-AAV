import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTweetsComponent } from './view-tweets/view-tweets.component';
import { FeedComponent } from './feed.component';
import { TweetComponent } from './tweet/tweet.component';
import { TitleCapitlizePipe } from 'src/app/pipes/title-capitlize.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TweetComponent,
        ViewTweetsComponent,
        FeedComponent,
        TitleCapitlizePipe
      ],

      imports: [
        CommonModule,
        FormsModule,
      ],
    });
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
