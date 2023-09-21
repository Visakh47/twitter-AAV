import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupPageComponent } from './signup-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthService } from '../service/user-auth.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';

describe('SignupPageComponent', () => {
  let component: SignupPageComponent;
  let fixture: ComponentFixture<SignupPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule, ReactiveFormsModule],
      declarations: [SignupPageComponent],
      providers: [UserAuthService,JwtHelperService,  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
    });
    fixture = TestBed.createComponent(SignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
