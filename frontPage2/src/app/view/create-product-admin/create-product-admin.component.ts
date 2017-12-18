import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DataService } from '../../service/dataService/data.service';
import { LoginService } from '../../service/accounts/loginService';
import { User } from '../../model/usuario/User';

@Component({
  selector: 'app-create-product-admin',
  templateUrl: './create-product-admin.component.html',
  styleUrls: ['./create-product-admin.component.css'],
  providers: [LoginService]
})
export class CreateProductAdminComponent implements OnInit {

  constructor(private router: Router , public dataService: DataService, public loginService: LoginService) { }

  ngOnInit() {
    this.dataService.urlPage = this.router.url;
    console.log(this.dataService.urlPage);
  }

}
