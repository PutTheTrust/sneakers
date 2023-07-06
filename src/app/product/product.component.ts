import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  quantity = 0;
  currentImage = 1;
  thumbnails = [
    {
      id: 1,
      thumbnail: '../images/image-product-1-thumbnail.jpg',
      image: '../images/image-product-1.jpg',
    },
    {
      id: 2,
      thumbnail: '../images/image-product-2-thumbnail.jpg',
      image: '../images/image-product-1.jpg',
    },
    {
      id: 3,
      thumbnail: '../images/image-product-3-thumbnail.jpg',
      image: '../images/image-product-1.jpg',
    },
    {
      id: 4,
      thumbnail: '../images/image-product-4-thumbnail.jpg',
      image: '../images/image-product-1.jpg',
    },
  ];

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

  modifyCart = (value: number) => {
    if (this.quantity + value < 0) {
      return;
    }

    this.quantity += value;
  };
}
