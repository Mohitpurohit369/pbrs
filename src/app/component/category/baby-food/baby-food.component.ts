import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-baby-food',
  templateUrl: './baby-food.component.html',
  styleUrls: ['./baby-food.component.css']
})
export class BabyFoodComponent {
  productId: number;
  product: any;
  constructor(private route: ActivatedRoute, private productService: DataService) { }

  ngOnInit(): void {
    // this.productId = +this.route.snapshot.paramMap.get('id');
    // this.product = this.productService.getProductById(this.productId);
    
  }
}
