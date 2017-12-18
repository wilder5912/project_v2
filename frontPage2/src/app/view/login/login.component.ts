import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../model/usuario/User';
import { LoginService } from '../../service/accounts/loginService';
import { DataService } from '../../service/dataService/data.service';
import { Router, CanActivate } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {

  model: User = new User();
  form: FormGroup;
  loading = false;
  constructor(public loginService: LoginService , public router: Router, public dataService: DataService) {
  }
  ngOnInit() {

    if (localStorage.getItem('currentUser')) {
      const users: any[] = JSON.parse(localStorage.getItem('currentUser')) || [];
      this.model.emailUser = users['emailUser'];
      this.loginService.isLogin(this.model)
        .subscribe(result => {
          if (null !== result) {
            localStorage.setItem('currentUser', JSON.stringify({emailUser: result.emailUser, token: 'fake-jwt-token'}));
            if(result.typeUser === 'Admin') {
              this.loginService.redirectUser(result,'/homeAdmin');
            }else{
              this.loginService.redirectUser(result,'/home');
            }
          }
        }, e => {
          console.log('errrr');
        });
    }
  }

  login() {
      this.loginService.login(this.model)
      .subscribe(result => {
        if (null !== result) {
          localStorage.setItem('currentUser', JSON.stringify({ emailUser: result.emailUser, token: 'fake-jwt-token' }));
        }
        window.location.reload();

      }, e => {
        console.log('errrr');
      });
  }
}
