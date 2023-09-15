import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tweet } from '../feed.interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';

const USER_KEY = 'userData'
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  public tweetContent!: string;
  @Output() public TweetEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private readonly localStorageService: LocalStorageService) {}
  
  public postTweet(): void{
    let userName: string = this.localStorageService.get(USER_KEY);
    const twt: tweet ={
      id: 1,
      content: this.tweetContent,
      author: userName,
      username: `@${userName}`,
      liked: false
    };
    this.TweetEmitter.emit(twt);

    this.tweetContent = '';
  }
}
