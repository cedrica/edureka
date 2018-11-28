import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './products.component';
import {ProductFilter} from './product-fiter.pipe';
import {ProductDetailComponent} from './detail/product-detail.component';
import {ProductService} from './product.service';
import {SharedModule} from '../shared/shared.module';
import {CreateProductComponent} from './create/create.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductComponent},
      {path: 'products/:id', component: ProductDetailComponent}
    ])
  ],
  declarations: [
    ProductComponent,
    ProductFilter,
    ProductDetailComponent
  ],
  providers: [
    ProductService
  ]
})

export class ProductModule {

}
