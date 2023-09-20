import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { product, productParent } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  api = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {
    return this.http.get<productParent>(`${this.api}/products`).pipe(
      map((response: productParent) => response.products));
  }
}
