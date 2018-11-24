import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product';


@Pipe({
  name: 'productFilter'
})

export class ProductFilter implements PipeTransform {
  transform(value: IProduct[], filteredBy: string): IProduct[] {
    filteredBy = filteredBy ? filteredBy.toLocaleLowerCase() : null;
    return filteredBy ? value.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filteredBy) !== -1) : value;

  }

}
