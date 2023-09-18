import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string): any {
    let value = localStorage.getItem(key);
    return JSON.parse(value!);
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
}
