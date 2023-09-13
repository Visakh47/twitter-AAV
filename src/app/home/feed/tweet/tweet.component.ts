import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tweet } from '../feed.interface';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Output() public TweetList: EventEmitter<any> = new EventEmitter();
  twt: tweet = {
    id: 1,
    content: 'HI',
    author: 'JohnDoe',
    username: '@JohnDoe'
  };
  public postTweet(tweetContent: string): void{
    this.twt.content = tweetContent;
    this.TweetList.emit(this.twt);
  }
}
