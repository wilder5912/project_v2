import { Component ,OnInit} from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { DataService } from './service/dataService/data.service';
import { User } from './model/usuario/User';
import { LoginService } from './service/accounts/loginService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent {
  title = 'app';
  user: User = new User();
  stateUser : boolean=null;


  constructor( public dataService:DataService ,public loginService:LoginService) {

  }
  ngOnInit() {
    this.getUserDataServer();
  }

  getUserDataServer(){
    if (localStorage.getItem('currentUser')) {
      let users: any[] = JSON.parse(localStorage.getItem('currentUser')) || [];
      this.user.emailUser=users['emailUser'];
    }
    this.loginService.isLogin(this.user)
      .subscribe(result => {
        this.stateUser=true;
        if (null !== result) {
          this.dataService.AUTH_CONFIG=result;
          localStorage.setItem('currentUser', JSON.stringify({emailUser: result.emailUser, token: "fake-jwt-token"}));
          this.user=result;
          console.log(this.user.typeUser);

          return this.dataService.AUTH_CONFIG;
        }else{
          return this.user;
        }
      }, e => {
        console.log("errrr")
      });
  }
  logout() {
    this.loginService.logout()
      .subscribe(result => {
        window.location.reload();
      }, e => {
        console.log("errrr")
      });
  }
}
