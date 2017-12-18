import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable,Component } from '@angular/core';
import { User } from '../../model/usuario/User';
import { LoginService } from '../../service/accounts/loginService';

@Injectable()
export class DataService {
 private _apiUrl = 'http://localhost:8080';
 public urlPage = '/' ;


 constructor() {

  }
  AUTH_CONFIG: User = {
      userID: 0,
      firtNameUser: '',
      lastNameUser:'',
      emailUser: '',
      password: '',
      typeUser: ''
  };

  getApiUrl(): string {
    return this._apiUrl;
  }


}
