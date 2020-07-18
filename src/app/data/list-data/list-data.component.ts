import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

  constructor(private dataService:DataService) { }
  data:[];
  error:any;
  ngOnInit() {
    this.dataService.fetchAllData().subscribe(
      data=>{
        this.data=data;
        console.log(this.data);
      },
      error =>{
        this.error=error.message;
      }
    )
  }

}
