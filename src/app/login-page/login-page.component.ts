import { Component } from '@angular/core';
import { IUserDetails } from '../app.interface';
import { Router } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public error: boolean = false;

  public loginForm!: FormGroup<{
    email: FormControl<any>,
    password: FormControl<any>
  }>;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly userAuthService: UserAuthService,
    private readonly localStorageService: LocalStorageService,
    ) { }

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.localStorageService.set('loggedin', false);
  }

  public onSubmit(): void {
    const isUserValid = this.userAuthService.validateUser(this.loginForm.value);
    isUserValid ? void this.router.navigate(['products']) : this.error = true;
    if(isUserValid)
      this.localStorageService.set('loggedin',true);
  }

  public onSignUp(): void {
    void this.router.navigate(['signup']);
  }
}
