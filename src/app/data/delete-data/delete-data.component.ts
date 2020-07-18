import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {

  constructor(private route: ActivatedRoute,private dataService: DataService) { }
  id: number;
  message: String;
  error: any;
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.dataService.deleteRecord(this.id).subscribe(
      message=>{
        this.message=message;
      },
      error=>{
        this.error=error;
      }
    )
  }

}
