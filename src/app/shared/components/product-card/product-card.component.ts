import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, IproductSpecs } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product !: Iproduct

  stars = [1, 2, 3, 4, 5];
  favActive: boolean = false
  orderCount : number = 0
  activeTab: string = 'details';
  constructor() { }

  ngOnInit(): void {
  }





  increaseOnClick(){
    if(this.orderCount >= 0){
      this.orderCount++
    }
  }
  reducOnClick(){
    if(this.orderCount > 0){
      this.orderCount--
    }
  }

}
