import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { DataService } from './service/dataService/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'app';

  constructor( public dataService:DataService) {
    this.dataService.increment();
    console.log(this.dataService.get(),"999");
  }

}
