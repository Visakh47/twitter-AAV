import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tweet } from '../feed.interface';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  public tweetContent!: string;
  @Output() public TweetEmitter: EventEmitter<any> = new EventEmitter();
  public postTweet(): void{
    const twt: tweet ={
      id: 1,
      content: this.tweetContent,
      author: 'JohnDoe',
      username: '@JohnDoe'
    };
    this.TweetEmitter.emit(twt);
  }
}
