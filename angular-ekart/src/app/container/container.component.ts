import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  searchText: string = '';

  @ViewChild(ProductListComponent) productListEl: ProductListComponent | null =
    null;

  setSearchText(searchText: string) {
    this.searchText = searchText;
  }

  // name = 'JayT';
  // addToCart: number = 0;
  // product = {
  //   name: 'Iphone 18',
  //   price: 999,
  //   color: 'Light Blue',
  //   discount: 8.5,
  //   inStock: 12,
  //   productImage: '/assets/images/iphone.png',
  // };
  // getDiscountPrice() {
  //   return (
  //     this.product.price - this.product.price * (this.product.discount / 100)
  //   );
  // }
  // onNameChange(event: any) {
  //   this.name = event.target.value;
  // }
  // decrementCartValue() {
  //   if (this.addToCart > 0) {
  //     this.addToCart--;
  //   }
  // }
  // incrementCartValue() {
  //   if (this.addToCart < this.product.inStock) {
  //     this.addToCart++;
  //   }
  // }
}
