import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
// muss be define inside providers array
export class ProductService {
  private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';
  private _moviesUrl = 'https://ngproductsparam.herokuapp.com/api/getMovies';
  constructor(private _http: Http) {}
  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
            .pipe(map((response: Response) => <IProduct[]> response.json()))
            .pipe(catchError(this.handleError));
  }

  getProductDetail(id): Observable<IProduct[]> {
    return this._http.get(this._productUrl + `?productId=${id}`)
      .pipe(map((response: Response) => <IProduct[]> response.json()))
      .pipe(catchError(this.handleError));

  }

  private handleError(error: Response) {
    return  Observable.throw(error.json().error || 'server Error');
  }
}
