import { Component, OnInit } from '@angular/core';
import { ITrendingHappening, ITrendingPerson } from '../home.interface';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit{
  public trendingList!: Array<ITrendingHappening>;
  public trendingPersonList!: Array<ITrendingPerson>;
  constructor() {}
  public ngOnInit(): void {
    this.trendingPersonList = [
      {
        img: "profile1.jpg",
        author: 'Virat Kohli',
        username: '@Virat47'
      },
      {
        img: "profile2.jpg",
        author: 'Serena Williams',
        username: '@Serena23'
      },
      {
        img: "profile3.jpg",
        author: 'Roger Federer',
        username: '@RF20'
      },
      {
        img: "profile4.jpg",
        author: 'Megan Rapinoe',
        username: '@Megan10'
      }
    ];    
    this.trendingList = [
      {
        place: "India",
        hashtag: "#IndiaVsPak",
        content: "The scores are tied",
        postCount: 4178
      },
      {
        place: "USA",
        hashtag: "#SportsFanatics",
        content: "Exciting game last night!",
        postCount: 892
      },
      {
        place: "Australia",
        hashtag: "#CricketMatch",
        content: "Australia wins by 50 runs!",
        postCount: 3210
      },
      {
        place: "Canada",
        hashtag: "#HockeyNight",
        content: "Great match, eh?",
        postCount: 1567
      }
    ]
  }

  

  
}
