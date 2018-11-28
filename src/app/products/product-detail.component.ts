import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OnInit} from '@angular/core';

@Component ({
  templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
  title = 'Order list';
  name;
  description;
  img;
  constructor(private __route: ActivatedRoute, private __router: Router) {

  }

  ngOnInit(): void {
    const id = +this.__route.snapshot.params['id']; // just by using this syntax (+this...) you can get the params
    this.title += `>>>>${id}`;
    this.__route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.img = params['imageUrl'];
      this.description = params['description'];
    });
  }

  onBack() {
    this.__router.navigate(['/products']);
  }

}
