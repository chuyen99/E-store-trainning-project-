import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from "./product/product";
import { Flowersoptions } from './flowersoptions/flowersoptions';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Flowersoptions],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectangular-1');
  name = 'Chuyen Palm';
}
