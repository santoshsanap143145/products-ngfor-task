import { Component } from '@angular/core';
import { Iproduct } from './shared/models/product';
import { productArr } from './shared/const/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productArr : Array<Iproduct> = productArr;
  
}
