import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  quantity = 0;
  numberOfProduct = 0;
  currentImage = 1;
  thumbnails = [
    {
      id: 1,
      thumbnail: '../../assets/images/image-product-1-thumbnail.jpg',
      image: '../../images/image-product-1.jpg',
    },
    {
      id: 2,
      thumbnail: '../../assets/images/image-product-1-thumbnail.jpg',
      image: '../../images/image-product-1.jpg',
    },
    {
      id: 3,
      thumbnail: '../../assets/images/image-product-1-thumbnail.jpg',
      image: '../../images/image-product-1.jpg',
    },
    {
      id: 4,
      thumbnail: '../../assets/images/image-product-1-thumbnail.jpg',
      image: '../../images/image-product-1.jpg',
    },
  ];

  constructor(private cartService: CartServiceService) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onClick = (direction: number) => {
    if (
      this.currentImage + direction < 1 ||
      this.currentImage + direction > this.thumbnails.length
    ) {
      return;
    }
    this.currentImage += direction;
    // console.log(this.currentImage);
  };

  changeImage = (idx: number) => {
    this.currentImage = idx;
  };

  modifyCart = (value: number) => {
    if (this.quantity + value < 0) {
      return;
    }

    this.quantity += value;
  };

  addToCart(value: number) {
    this.cartService.addToCart(value);
    window.alert('Your product has been added to the cart!');
  }
}
