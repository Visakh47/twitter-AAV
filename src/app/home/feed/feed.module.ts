import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from './tweet/tweet.component';
import { ViewTweetsComponent } from './view-tweets/view-tweets.component';
import { FeedComponent } from './feed.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TweetComponent,
    ViewTweetsComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FeedComponent,
  ]
})
export class FeedModule { }
