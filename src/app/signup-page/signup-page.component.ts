import { Component } from '@angular/core';
import { IUserDetails } from '../app.interface';
import { Router } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  public error = false;

  public signUpForm!: FormGroup<{
    name: FormControl<any>,
    email: FormControl<any>,
    password: FormControl<any>,
    confirmPassword: FormControl<any>

  }>;

  
//you can't directly access a service within a component
//you have to perform dependency injection with a constructor to use router Service

  constructor(
    public readonly router: Router,private readonly fb: FormBuilder,  private readonly userAuthService: UserAuthService
  ) {

  }
  
  public ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  public onReset(): void {
    this.signUpForm.reset();
  }

  public onSubmit(): void {

    if(this.signUpForm.controls['password'].value===this.signUpForm.controls['confirmPassword'].value){
      this.userAuthService.setUserDetails(this.signUpForm.value as IUserDetails);
      void this.router.navigate(['login']);
    }
    else{
      this.error=true;
    }
  }
}
