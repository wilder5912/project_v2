import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../../model/usuario/User";
import { DataService } from '../../service/dataService/data.service';

@Injectable()
export class UserService {

     constructor(private http: HttpClient, public dataService:DataService) { }

    public register(User: User): Observable<boolean>  {
      return this.http.post<boolean>(this.getUrl("/user/addUser"), JSON.stringify(User));
    }



  private getUrl(modelo: String) {
    return this.dataService.getApiUrl() + modelo;
  }


}


