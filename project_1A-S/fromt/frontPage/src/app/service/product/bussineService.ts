import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders , HttpHandler, HttpRequest ,HttpEvent,HttpInterceptor ,  HTTP_INTERCEPTORS } from "@angular/common/http";
import { User } from "../../model/usuario/User";
import { Bussine } from "../../model/bussine/Bussine";

import { DataService } from '../dataService/data.service';
import { Router } from '@angular/router';
@Injectable()
export class BussineService {

    constructor(private http: HttpClient, public dataService: DataService , public router: Router) { }

    public getBussine(): Observable<Bussine>  {
      return this.http.get<Bussine>(this.dataService.getUrl("/bussine/getBussineDTO"));
     }
     public getBussineAll(bussine: Bussine): Observable<Object>  {
      return this.http.post<Object>(this.dataService.getUrl("/bussine/getBussineListAllDTO"),JSON.stringify(bussine));
     }

}


