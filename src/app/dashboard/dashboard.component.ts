import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {  OnInit } from '@angular/core';
import { DataServiceService} from '../service/data-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  furnitureArray=[];
  cssRate=3;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private dataService: DataServiceService) {}
  ngOnInit(){
    const responseData = fetch("assets/response.json").then(response => response.json()); responseData.then((res) => { console.log(res)  });

    this.dataService.get('assets/response.json',(data)=>{
      console.log(data);
       this.furnitureArray = data.data;
    })
  }
}
