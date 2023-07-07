import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // productCount: number = this.cartService.getItems();
  constructor(private cartService: CartServiceService) {
    // this.productCount = this.cartService.numberOfProduct;
  }

  get productCount(): number {
    return this.cartService.numberOfProduct;
  }

  ngOnInit(): void {
    // this.numberOfProduct = this.cartService.getItems();
  }
}
