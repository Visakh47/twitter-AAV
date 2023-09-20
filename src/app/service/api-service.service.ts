import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  api = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {

    return this.http.get<product[]>(`${this.api}/products`);
  }
}
