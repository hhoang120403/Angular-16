import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() productListEl: ProductListComponent | null = null;

  product: Product | null = null;

  ngOnInit(): void {
    this.product = this.productListEl!.selectedProduct;
  }
}
