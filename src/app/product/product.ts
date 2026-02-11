import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  name = input<string>();
  price = input<number>();
  url = input<string>();
}
