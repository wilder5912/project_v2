import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../../model/usuario/User";
import { DataService } from '../../service/dataService/data.service';

@Injectable()
export class LoginService {

     constructor(private http: HttpClient, public dataService:DataService) { }

    public login(User: User): Observable<User>  {
      return this.http.post<User>(this.getUrl("/user/loginUser"), JSON.stringify(User));
    }

  public isLogin(User: User): Observable<User>  {
      // console.log(User);
    return this.http.post<User>(this.getUrl("/user/isLoginUser"), JSON.stringify(User));
  }

  public logout(): Observable<boolean>  {
    localStorage.removeItem('currentUser');
    return this.http.get<boolean>(this.getUrl("/user/logoutUser"));
  }

  private getUrl(modelo: String) {
    return this.dataService.getApiUrl() + modelo;
  }

  getUserDataServer(user:User): void{
    if (localStorage.getItem('currentUser')) {
    let users: any[] = JSON.parse(localStorage.getItem('currentUser')) || [];
    user.emailUser=users['emailUser'];
    this.isLogin(user)
      .subscribe(result => {
        if (null !== result) {
          localStorage.setItem('currentUser', JSON.stringify({emailUser: result.emailUser, token: "fake-jwt-token"}));

        }
      }, e => {
        console.log("errrr")
      });
  }
}



}


