import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable,Component } from '@angular/core';
import { User } from '../../model/usuario/User';
import { LoginService } from '../../service/accounts/loginService';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
 private _apiUrl = 'http://localhost:8080';
 public urlPage = '/' ;
 private _languagePage = 'en';
 constructor( private modalService: BsModalService , private router:Router){}

  AUTH_CONFIG: User = {
      userID: 0,
      firtNameUser: '',
      lastNameUser:'',
      emailUser: '',
      password: '',
      typeUser: ''
  };

  public getUrl(modelo: String) {
    return this.getApiUrl() + modelo;
  }

  public redirectUser(userA: User, urlPageN: string ) {
    this.router.navigate([urlPageN]);
  }

  public getApiUrl(): string {
    return this._apiUrl;
  }

  public showModal(template,config){
    return  this.modalService.show(
            template,
            Object.assign({}, config, { class: 'modal-sm' })
          );
  }

  get languagePage(): string {
    return this._languagePage;
  }

  set languagePage(value: string) {
    this._languagePage = value;
  }
}
