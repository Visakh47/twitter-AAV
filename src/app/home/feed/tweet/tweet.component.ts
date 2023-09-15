import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tweet } from '../feed.interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { IUserDetails } from 'src/app/app.interface';

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
    let user: IUserDetails = this.localStorageService.get(USER_KEY);
    const twt: tweet ={
      id: Number(`${new Date().getTime()}${Math.floor(Math.random() * 10000)}`), //unique id
      content: this.tweetContent,
      author: user.name,
      username: `@${user.name}`,
      liked: false
    };
    this.TweetEmitter.emit(twt);

    this.tweetContent = '';
  }
}
