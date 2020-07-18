import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Data } from 'src/app/model/data.model';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  constructor(private route: ActivatedRoute,private dataService: DataService,private router: Router) { }
  id:number;
  data: Data;
  error: any;

  
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.dataService.fetchRecord(this.id).subscribe(
      data=>{
        this.data=data;
      },
      error=>{
        this.error=error;
      }
    )
  }
  onClickSubmit(dataForm:any){
    this.dataService.updateRecord(this.id,dataForm).subscribe(
      data=>{
        this.data=data;
        this.router.navigate(['data',this.id])
      },
      error=>{
        this.error=error;
      }
    )
  }

}
