import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // numberOfProduct = this.cartService.getItems();
  constructor(private cartService: CartServiceService) {}

  get productCount(): number {
    return this.cartService.numberOfProduct;
  }

  EmptyCart(): void {
    this.cartService.clearCart();
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
