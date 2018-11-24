import {Component} from '@angular/core';


@Component({
  selector: 'app-edu', // see index.html
  template: '<div><h1> AngularJS</h1>' + // in the layout we have template but in pages we use templateUrl
    '<app-products></app-products></div>'
})

export class AppComponent {

}
