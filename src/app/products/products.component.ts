import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
  // selector: 'app-products',
  templateUrl: './products.component.html',
  // styles: ['thead{color:red}', 'h1{font-size:100px}'], // Style-Tag but not re commanded
  styleUrls: ['./products.component.css']
})

export class ProductComponent implements OnInit {
  showImage = true;
  errorMessages: string;
  ImageWidth = 50;
  filterProduct;
  title = 'Products list';
  // is run before ngOnInit
  constructor(private __productService: ProductService) {
    this.__productService.getProducts()
      .subscribe(products => this.products = products,
                                  error => this.errorMessages = <any>error);
  }

  products: IProduct[];

  ngOnInit(): void {
   console.log('constructor is runned bvefore ngOnInit');
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(message: string): void {
    this.title = 'The product list ' + message;
  }

  onCreateProduct(): void {

  }
}
