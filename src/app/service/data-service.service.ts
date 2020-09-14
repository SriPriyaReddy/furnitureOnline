import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  get(uri?, callback?){
    this.http.get(uri).subscribe(
      data => callback(data)
  );
  }
}
