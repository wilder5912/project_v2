import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../model/usuario/User';
import {SharedService } from '../service/sesion/shared.service';
import { AuthService } from '../service/auth-service/Auth-service';
import { DataService } from '../service/dataService/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService,SharedService]
})

export class LoginComponent implements OnInit {

  model: User = new User();
  form: FormGroup;
  loading: boolean = false;
  constructor(public authenticationService:AuthService ,private sharedService:SharedService, public dataService:DataService) {

  }

  ngOnInit() {
   // console.log(this.dataService.get(),"ddddddddddddd");

  }

  login() {
      this.authenticationService.login(this.model)
      .subscribe(result => {
        if(result){
          localStorage.setItem('currentUser', JSON.stringify({ username: "wilder", token: "fake-jwt-token" }));
        }
        console.log(result,"qqqqqqqqqqqqq");
        this.loading = true;
      }, e => {
        console.log("errrr")
      });
  }


}
