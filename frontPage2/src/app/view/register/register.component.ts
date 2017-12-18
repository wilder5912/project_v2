import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../model/usuario/User';
import { UserService } from '../../service/accounts/userService';
import { DataService } from '../../service/dataService/data.service';
import { LoginService } from '../../service/accounts/loginService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService,LoginService]
})
export class RegisterComponent implements OnInit {
  model: User = new User();
  user: User = new User();

  form: FormGroup;
  constructor(public userService:UserService ,public dataService:DataService, public loginService:LoginService) { }

  ngOnInit() {
    this.model =this.dataService.AUTH_CONFIG;
     //this.loginService.getUserDataServer(this.user).subscribe(result=>{

      // this.model=result;

   // });
    //console.log(this.dataService.AUTH_CONFIG,"" ,"jjjjjjjjjjjjjjjjjjj");
    //console.log( this.model,"-----------------llllll------");
    //this.loginService.getUserDataServer(this.user);
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
