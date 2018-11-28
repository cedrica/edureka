import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OnInit} from '@angular/core';
import {IProduct} from '../product';
import {ProductService} from '../product.service';

@Component ({
  templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
  title = 'Order list';
  name;
  description;
  img;
  details: IProduct[];

  constructor(private __route: ActivatedRoute, private __router: Router, private __productSivice: ProductService) {

  }

  ngOnInit(): void {
    const id = +this.__route.snapshot.params['id']; // just by using this syntax (+this...) you can get the params
    this.title += `>>>>${id}`;
    /* use this to get data using query params displayed in Browser
    this.__route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.img = params['imageUrl'];
      this.description = params['description'];
    });
    */

    // get query params without displaying them in the browser
    this.__productSivice.getProductDetail(id).subscribe((data) => this.details = data);
  }

  onBack() {
    this.__router.navigate(['/products']);
  }

}
