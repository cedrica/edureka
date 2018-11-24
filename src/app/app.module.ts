import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ProductsComponent} from './products/products.component';
import {FormsModule} from '@angular/forms';
import {ProductFilter} from './products/product-fiter.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule // for use bi-directional binding
  ],

  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFilter

  ],
  // bootstrap muss just be declare once in the app
  // and here the layout file is call AppComponent
  // and just one Layout muss be declared here that mean boostrapp array muss just have one thing defined insides
  bootstrap: [
    AppComponent
  ]
})

// if you change the class name here change it too in main.ts
export class AppModule {}

