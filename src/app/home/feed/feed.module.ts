import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from './tweet/tweet.component';
import { ViewTweetsComponent } from './view-tweets/view-tweets.component';
import { FeedComponent } from './feed.component';



@NgModule({
  declarations: [
    TweetComponent,
    ViewTweetsComponent,
    FeedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeedComponent,
  ]
})
export class FeedModule { }
