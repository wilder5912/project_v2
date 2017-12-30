import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../../model/usuario/User';
import { UserService } from '../../../service/accounts/userService';
import { DataService } from '../../../service/dataService/data.service';
import { LoginService } from '../../../service/accounts/loginService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService,LoginService]
})
export class RegisterComponent implements OnInit {
  private model: User = new User();
  private user: User = new User();

  private form: FormGroup;
  constructor(public userService:UserService ,public dataService:DataService, public loginService:LoginService) { }

  ngOnInit() {
    this.model =this.dataService.AUTH_CONFIG;
  }

  public registerUser() {
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
