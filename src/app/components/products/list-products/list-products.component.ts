import { Component, OnInit } from '@angular/core';
import productsData from '../../../../assets/products.json';
import { IProduct } from '../product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: IProduct[] = productsData;
  constructor() { }

  ngOnInit(): void {
  }

}
