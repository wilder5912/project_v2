import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable,Component } from '@angular/core';

@Injectable()
export class DataService {
 private _apiUrl ='http://localhost:8080';
  public count = 0;
  constructor() { }


  getApiUrl(): string {
    return this._apiUrl;
  }

  get() {
    return this.count;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
