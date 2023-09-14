import { Injectable } from '@angular/core';
import { IUserDetails } from '../app.interface';
import { LocalStorageService } from './local-storage.service';

const USER_KEY = 'userData'
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private userDetails!: IUserDetails;
  constructor(private readonly localStorageService: LocalStorageService) { }

  public getUserDetails(): IUserDetails {
    const userData = this.localStorageService.get(USER_KEY);
    //refactor to get user by email - abhijith
    this.userDetails = userData;
    return this.userDetails;
  }

  public setUserDetails(userData : IUserDetails): void {
    this.localStorageService.set(USER_KEY, userData);
    this.userDetails = userData;
  }

  public validateUser(passedUserData: Partial<IUserDetails>): boolean {
    this.getUserDetails();
    return this.userDetails?.email === passedUserData.email &&
    this.userDetails?.confirmPassword === passedUserData.password;
  }

}
