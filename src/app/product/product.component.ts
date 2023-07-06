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
}
