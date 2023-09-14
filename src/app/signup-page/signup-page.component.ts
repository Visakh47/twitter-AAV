import { Component } from '@angular/core';
import { IUserDetails } from '../app.interface';
import { Router } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  public error = false;

  public form!: IUserDetails;

  
//you can't directly access a service within a component
//you have to perform dependency injection with a constructor to use router Service

  constructor(
    public readonly router: Router,  private readonly userAuthService: UserAuthService
  ) {

  }
  
  public ngOnInit(): void {
    this.form = {
      name :'',
      email : '',
      password : '',
      confirmPassword : ''
    }
  }

  public onReset(): void {
    this.form = {
      name :'',
      email : '',
      password : '',
      confirmPassword : ''
    }
  }

  public onSubmit(): void {
    if(this.form.password === this.form.confirmPassword) {
      this.error = false;
      this.userAuthService.setUserDetails(this.form);
      void this.router.navigate(['login']);
    }
    else  
      this.error = true;
  }

}
