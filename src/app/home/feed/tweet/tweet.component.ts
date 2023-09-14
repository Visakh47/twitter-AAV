import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tweet } from '../feed.interface';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Output() public TweetList: EventEmitter<any> = new EventEmitter();
  public postTweet(tweetContent: string): void{
    const twt: tweet ={
      id: 1,
      content: tweetContent,
      author: 'JohnDoe',
      username: '@JohnDoe'
    };
    this.TweetList.emit(twt);
  }
}
