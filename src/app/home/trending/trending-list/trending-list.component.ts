import { Component, Input, OnInit } from '@angular/core';
import { ITrendingHappening, ITrendingPerson } from '../../home.interface';

@Component({
  selector: 'app-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrls: ['./trending-list.component.scss']
})
export class TrendingListComponent implements OnInit {
 public ngOnInit(): void {
   console.log(this.trendingList);
 }
 @Input() public trendingList!: Array<ITrendingHappening>;
 @Input() public trendingPersonList!: Array<ITrendingPerson>;

}
