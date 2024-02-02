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
      console.log(res)
    })
  }
}
