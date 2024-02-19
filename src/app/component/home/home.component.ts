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
    this.dataservice.getproductdata().subscribe(res=>{
      this.userData=res;
      console.log("main Banner",res)
    })


this.dataservice.getsubbanner().subscribe(ress=>{
  console.log("sub Banner",ress)
})
    
  }
}
