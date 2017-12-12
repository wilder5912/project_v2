import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {SharedService } from '../service/sesion/shared.service';
import { DataService } from '../service/dataService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router ,private sharedService:SharedService, public dataService:DataService) {

  }

  ngOnInit() {
    this.dataService.increment();
    console.log(this.dataService.get(),"xxxx");

  }

}
