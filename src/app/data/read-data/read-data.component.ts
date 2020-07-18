import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/model/data.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.css']
})
export class ReadDataComponent implements OnInit {

  constructor(private route: ActivatedRoute,private dataService: DataService) { }

  id:number;
  data: Data;
  error:any;
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.dataService.fetchRecord(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data);
    },error=>{
      this.error=error;
    })
  }

}
