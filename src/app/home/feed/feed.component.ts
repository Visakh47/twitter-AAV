import { Component, EventEmitter, Input } from '@angular/core';
import { tweet } from './feed.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
 public tweetList: tweet[] = [];

 public postTweet(twt: tweet): void {
  this.tweetList.push(twt);
  console.log(this.tweetList);
 }
}
