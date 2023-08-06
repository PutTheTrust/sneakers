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
  isOpen = this.cartService.isOpen;

  get productCount(): number {
    return this.cartService.numberOfProduct;
  }

  EmptyCart(): void {
    this.cartService.clearCart();
  }

  // ToggleCart(): void {
  //   this.isOpen = !this.isOpen;
  // }

  get openStat(): boolean {
    return this.cartService.isOpen;
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
