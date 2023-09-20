import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUserDetails, User, product, productParent } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  api = 'https://dummyjson.com';
  backend_api = 'https://localhost:7283'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {
    return this.http.get<productParent>(`${this.api}/products`).pipe(
      map((response: productParent) => response.products));
  }

  tokenize(user: Partial<IUserDetails>): Observable<any> {
    return this.http.post<any>(`${this.backend_api}/api/user/login`,user);
  }
}
