import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http:HttpClient) { }

  fetchAllData(){
    return this.http.get<[]>('http://localhost:7070/data/1/25');
  }
  fetchRecord(id: number){
    return this.http.get<Data>('http://localhost:7070/data/'+id);
  }
  updateRecord(id: number,data:any){
    return this.http.put<Data>('http://localhost:7070/data/'+id,data);
  }
  deleteRecord(id: number){
    return this.http.delete<string>('http://localhost:7070/data/'+id);
  }
  searchRecordsBetween(startDate: Date,endDate: Date){
    return this.http.get<[]>('http://localhost:7070/data/StartDate/'+startDate+'/EndDate/'+endDate);
  }
}
