import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../../model/usuario/User";
import { DataService } from '../../service/dataService/data.service';
import { Router } from '@angular/router';
@Injectable()
export class LoginService {

     constructor(private http: HttpClient, public dataService: DataService , public router: Router) { }

    public login(User: User): Observable<User>  {
      return this.http.post<User>(this.getUrl("/user/loginUser"), JSON.stringify(User));
    }

  public isLogin(User: User): Observable<User>  {
    return this.http.post<User>(this.getUrl("/user/isLoginUser"), JSON.stringify(User));
  }

  public logout(): Observable<boolean>  {
    localStorage.removeItem('currentUser');
    return this.http.get<boolean>(this.getUrl("/user/logoutUser"));
  }

  private getUrl(modelo: String) {
    return this.dataService.getApiUrl() + modelo;
  }

  redirectUser(userA: User, urlPageN: string ) {
    this.router.navigate([urlPageN]);
  }

}


