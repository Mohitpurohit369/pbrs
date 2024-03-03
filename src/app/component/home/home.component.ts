import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userData :any;
  subbanner:any;
  grocery:any
  constructor(private dataservice :DataService){

    this.dataservice.getproductdata().subscribe((res:any)=>{
      this.userData=res.data;
      console.log("main Banner1",res.data);
    })
    this.dataservice.getsubbanner().subscribe((res:any)=>{
      this.subbanner=res.data;
      console.log("sub Banner1",res.data);
    })


    this.dataservice.getmaincatgery().subscribe((res:any)=>{
      this.grocery=res.data;
      console.log("dfhehsjd",res.data);
    })

    this.dataservice.getproducat().subscribe((res:any)=>{
      // this.grocery=res.data;
      console.log("product",res.data);
    })



  }
}
