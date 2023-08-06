import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  numberOfProduct = 0;
  numberOfProductChange: Subject<number> = new Subject<number>();
  isOpen = false;
  isOpenChange: Subject<boolean> = new Subject<boolean>();

  toggleCart() {
    this.isOpen = !this.isOpen;
  }

  addToCart(product: number) {
    this.numberOfProduct += product;

    // window.alert(this.numberOfProduct);
  }

  getItems() {
    this.numberOfProductChange.next(this.numberOfProduct);
    return this.numberOfProduct;
  }

  clearCart() {
    this.numberOfProduct = 0;
    return this.numberOfProduct;
  }

  constructor() {
    this.numberOfProductChange.subscribe((value) => {
      this.numberOfProduct = value;
      // window.alert(value);
      // window.alert(this.numberOfProduct);
    });
  }
}
