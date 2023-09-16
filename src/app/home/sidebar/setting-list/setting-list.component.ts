import { Component, OnInit } from '@angular/core';
import { IUserDetails } from 'src/app/app.interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';

const USER_KEY ="userData"
@Component({
  selector: 'app-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.scss']
})
export class SettingListComponent implements OnInit {
  public userData!: IUserDetails;
  constructor(private readonly localStorageService: LocalStorageService) {}
  
  ngOnInit(): void {
    this.userData = this.localStorageService.get(USER_KEY);
    console.log(this.userData);
  }

  public onLogOut(){
    
  }
}
