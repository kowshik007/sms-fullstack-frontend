import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private dataService:DataService) { }
  displaySearch:boolean=true;

  results:[];
  error:any;
  startDate:Date;
  endDate:Date;
  ngOnInit() {
  }
  onClickSubmit(values: any){
    this.startDate=values.startDate;
    this.endDate=values.endDate;
    this.dataService.searchRecordsBetween(values.startDate,values.endDate).subscribe(
      results=>{
        this.results=results;
        this.displaySearch=false;
      },
      error=>{
        this.error=error;
      }
    )
  }

}
