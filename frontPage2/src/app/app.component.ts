import { Component , OnInit} from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { DataService } from './service/dataService/data.service';
import { User } from './model/usuario/User';
import { LoginService } from './service/accounts/loginService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoginService ]
})
export class AppComponent implements OnInit{
  title = 'app';
  idAN = '';
  idBN = '';
  idAN2 = '';
  idBN2= '';

  user: User = new User();
  stateUser: boolean = null;
  stateCss: boolean = true;
  stateCss2: boolean = true;
  constructor( public dataService: DataService , public loginService: LoginService, public router: Router) {

  }
  ngOnInit() {

    this.getUserDataServer();
  }
  selectTodo() {
    if(this.stateCss){
      this.stateCss = false;
      this.idAN = 'antive';
      this.idBN = 'in';
    }else{
      this.stateCss = true;
      this.idAN = '';
      this.idBN = '';
    }
  }  selectTodo2() {
    if(this.stateCss2){
      this.stateCss2 = false;
      this.idAN2 = 'antive';
      this.idBN2 = 'in';
    }else{
      this.stateCss2 = true;
      this.idAN2 = '';
      this.idBN2 = '';
    }
  }


  getUserDataServer() {
    if (localStorage.getItem('currentUser')) {
      const usersData: any[] = JSON.parse(localStorage.getItem('currentUser')) || [];
      this.user.emailUser = usersData['emailUser'];
    }

    this.loginService.isLogin(this.user)
      .subscribe(result => {
        this.stateUser = true;
        this.dataService.urlPage = this.router.url;
        if (null !== result) {
          this.dataService.AUTH_CONFIG = result;
          localStorage.setItem('currentUser', JSON.stringify({emailUser: result.emailUser, token: "fake-jwt-token"}));
          this.user = result;
          if (localStorage.getItem('currentUser')) {
            this.loginService.redirectUser(result, this.router.url);
          }
        }else {
          this.loginService.redirectUser(this.user, '/home');
        }


      }, e => {
        console.log( "errrr" );
      });
  }
  logout() {
    this.loginService.logout()
      .subscribe(result => {
        window.location.reload();
      }, e => {
        console.log( "errrr" );
      });
  }
}
