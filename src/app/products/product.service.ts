import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
// muss be define inside providers array
export class ProductService {
  private _productUrl = 'http://localhost:8000/api/products'; // 'https://ngproductsparam.herokuapp.com/api/getProductDetails';
  constructor(private _http: Http) {}
  // https://ngproductsparam.herokuapp.com/api/getProductDetails
  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
            .pipe(map((response: Response) => <IProduct[]> response.json()))
            .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    return  Observable.throw(error.json().error || 'server Error');
  }
}
