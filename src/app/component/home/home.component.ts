import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userData :any
  constructor(private dataservice :DataService){

    this.dataservice.getproductdata().subscribe((res:any)=>{
      this.userData=res.data;
      console.log("main Banner1",res.data[0].banner);
    })
    this.dataservice.getproductdata().subscribe((res:any)=>{
      this.userData=res.data;
      console.log("main Banner1",res.data[0].banner);
    })



  }
}
