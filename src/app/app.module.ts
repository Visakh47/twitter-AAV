import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { UserAuthService } from './service/user-auth.service';
import { LocalStorageService } from './service/local-storage.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpsConverterInterceptor } from './https-converter.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserAuthService, LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpsConverterInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
