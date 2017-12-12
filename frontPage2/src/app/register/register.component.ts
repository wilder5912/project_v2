import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../model/usuario/User';
import { UserService } from '../service/accounts/userService';


/*
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../model/usuario/User';
import {SharedService } from '../service/sesion/shared.service';
import { AuthService } from '../service/auth-service/Auth-service';
import { DataService } from '../service/dataService/data.service';
* */


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  model: User = new User();
  form: FormGroup;
  constructor(public userService:UserService ) { }

  ngOnInit() {
  }

  registerUser() {
   this.userService.register(this.model)
      .subscribe(result => {
        if(result){
          console.log(result,"t")
          //localStorage.setItem('currentUser', JSON.stringify({ username: "wilder", token: "fake-jwt-token" }));
        }else{
          console.log(result,"f")
        }

      }, e => {
        console.log("errrr")
      });


  }

}
