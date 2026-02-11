import { Component } from '@angular/core';
import { Product } from "../product/product";

@Component({
  selector: 'app-flowersoptions',
  imports: [Product],
  templateUrl: './flowersoptions.html',
  styleUrl: './flowersoptions.css',
})
export class Flowersoptions {


  product1 = {
    name: "flower",
    price: 12,
    url: "./flower.jpg"
  };


  product2 = {
    name: "tulipbouquet",
    price: 20,
    url: "./tulipbouquet.jpg"
  };

  product3 = {
    name: "tulipsmixed",
    price: 20,
    url: "./tulipsmixed.jpg"
  };
  products = [this.product1, this.product2, this.product3];
}
