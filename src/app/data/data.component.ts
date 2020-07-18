import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Data } from '../model/data.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    
  }

}
