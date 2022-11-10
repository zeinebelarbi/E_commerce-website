import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 export class HomeComponent implements OnInit  {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
   
  
  }

  items: MenuItem[];
  activeItem: MenuItem;
  value3: any;
   	
}
