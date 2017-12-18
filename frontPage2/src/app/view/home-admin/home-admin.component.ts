import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DataService } from '../../service/dataService/data.service';
import { LoginService } from '../../service/accounts/loginService';
import { User } from '../../model/usuario/User';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css'],
  providers: [LoginService]
})
export class HomeAdminComponent implements OnInit {

  user: User = new User();
  constructor(private router: Router , public dataService: DataService, public loginService: LoginService ) {
  }
  ngOnInit() {
    this.dataService.urlPage = this.router.url;
    console.log(this.dataService.urlPage);
  }
  logout() {
    this.loginService.logout()
      .subscribe(result => {
        window.location.reload();
      }, e => {
        console.log("errrr");
      });
  }
}
