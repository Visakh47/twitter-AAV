import { Injectable } from '@angular/core';
import { IUserDetails } from '../app.interface';
import { LocalStorageService } from './local-storage.service';
import { ApiServiceService } from './api-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
const USER_KEY = 'userData'
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private userDetails!: IUserDetails;
  constructor(private jwtHelper: JwtHelperService, private readonly localStorageService: LocalStorageService, private readonly apiService: ApiServiceService) { }

  public getUserDetails(): IUserDetails {
    const userData = this.localStorageService.get(USER_KEY);
    this.userDetails = userData;
    return this.userDetails;
  }

  public setUserDetails(userData: IUserDetails): void {
    this.localStorageService.set(USER_KEY, userData);
    this.userDetails = userData;
  }

  public validateUser(passedUserData: Partial<IUserDetails>): boolean {
    this.apiService.tokenize(passedUserData)
      .subscribe(response => {
          const token = (response).token;
          this.localStorageService.set("jwt",token);
      });
    this.getUserDetails();
    if(!this.isUserAuthenticated()) return false;
    return this.userDetails?.email === passedUserData.email &&
      this.userDetails?.confirmPassword === passedUserData.password;
  }

  public isUserAuthenticated() {
    const token = this.localStorageService.get("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token))
      return true;
    return false;
  }
}
