import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productCategory: any;
  constructor(private _dataservice: DataService, private router: Router) {
    this._dataservice.getproducttype().subscribe((res: any) => {
      console.log("data here tupe", res.data)
      this.productCategory = res.data;
    });
  }

  gerocry(id: any) {
    console.log("click data here", id)

    if (id == 'g') {
      this.router.navigate(['/grocery'])

    }
    else if (id == 'a') {
      this.router.navigate(['/agriculture'])
    }
    else {
      this.router.navigate(['/sevices'])
    }
  }
}
