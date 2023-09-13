import { Component, Input } from '@angular/core';
import { tweet } from '../feed.interface';

@Component({
  selector: 'app-view-tweets',
  templateUrl: './view-tweets.component.html',
  styleUrls: ['./view-tweets.component.scss']
})
export class ViewTweetsComponent {
  @Input() public tweetList: tweet[] = [];
}
