import { Component, OnInit } from '@angular/core';
import { VenkatService } from '../venkat.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {
 Employees=[]
  constructor( private venkatservice:VenkatService) { }

  ngOnInit(){
    this.getServiceData()
  }

getServiceData(){
 
     this.venkatservice.getData().subscribe(data=>{
            data.forEach(element => {
             element
      })
      this.Employees=data;
            
      //console.log('get',this.Employees)
})

}
}