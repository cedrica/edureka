import {Component} from '@angular/core';

@Component({
  // no selector used because page is called as router-link
  templateUrl: './order.component.html'
})

export class OrderComponent {
  title = 'Order list';

}
