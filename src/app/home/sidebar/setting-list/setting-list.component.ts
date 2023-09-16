import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private readonly localStorageService: LocalStorageService, private readonly router: Router) {}
  
  ngOnInit(): void {
    this.userData = this.localStorageService.get(USER_KEY);
    console.log(this.userData);
  }

  public onLogOut(){
    void this.router.navigate(['login']);
  
  }
}
