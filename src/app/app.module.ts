import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {OrderComponent} from './orders/order.component';
import {NotfoundComponent} from './shared/notfound.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {ProductModule} from './products/product.module';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // for use bi-directional binding
    HttpModule, // to use http request
    ProductModule,
    HttpClientModule,
    // oder here is important because it first check first line and so on and the
    // last one is for when it doesont find the others
    RouterModule.forRoot([
      {path: 'orders', component: OrderComponent},
      {path: 'home', component: HomeComponent},
      {path: 'form', component: FormComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: NotfoundComponent}// anything else
    ])
  ],

  declarations: [
    AppComponent,
    OrderComponent,
    NotfoundComponent,
    HomeComponent,
    FormComponent

  ],
  // bootstrap muss just be de
  // clare once in the app
  // and here the layout file is call AppComponent
  // and just one Layout muss be declared here that mean boostrapp array muss just have one thing defined insides
  bootstrap: [
    AppComponent
  ]
})

// if you change the class name here change it too in main.ts
export class AppModule {}

