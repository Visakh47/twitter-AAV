import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ApiServiceService } from './service/api-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { product } from './app.interface';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { UserAuthService } from './service/user-auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpClientModule } from '@angular/common/http';


describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [ApiServiceService,JwtHelperService,  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },],
    });
    service = TestBed.inject(ApiServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });



  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });

  it('testing hitting the right api endpoint',()=>{
    expect(service.api).toBe('https://dummyjson.com');
   })

  it('should get products from api', () => {
    const testProducts: product[]= [
      { id: 1, title: 'iPhone 9', description: 'An apple mobile which is nothing like apple' },
      { id: 2, title: 'iPhone X' , description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...'},
    ];

    service.getProducts().subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(testProducts);
    });

    const req = httpTestingController.expectOne(`${service.api}/products`);
    expect(req.request.method).toBe('GET');
    req.flush({ products: testProducts });
  });
});


describe('SignupPageComponent', () => {
  let component: SignupPageComponent;
  let fixture: ComponentFixture<SignupPageComponent>;
  let userAuthService: UserAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule, ReactiveFormsModule],
      declarations: [SignupPageComponent],
      providers: [UserAuthService,JwtHelperService,  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
    });
    fixture = TestBed.createComponent(SignupPageComponent);
    component = fixture.componentInstance;
    userAuthService = TestBed.inject(UserAuthService);
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should reset the form on reset button click', () => {
    component.ngOnInit();
    component.signUpForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password',
      confirmPassword: 'password',
    });

    component.onReset();

    expect(component.signUpForm.value).toEqual({
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
    });
  });

  it('should validate email', () => {
    component.ngOnInit();
    const user = {
      name: 'John Doe',
      email: 'test@carestack.com',
      password: 'password',
      confirmPassword: 'differentPassword',
    };
    component.signUpForm.setValue(user);

    component.onSubmit();

    expect(component.error).toBeTrue();
  });
});