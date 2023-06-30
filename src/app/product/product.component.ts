import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  quantity = 0;

  onClick = () => {
    console.log('clicked');
  };

  modifyCart = (value: number) => {
    if (this.quantity + value < 0) {
      return;
    }

    this.quantity += value;
  };
}
