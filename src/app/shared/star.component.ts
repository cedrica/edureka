import {Component, OnChanges, Input,
Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements  OnChanges {
  @Input() rating: number; // input param given in the html of product (= rating value of each product)
  starWidth: number;
  @Output() ratingClicked: EventEmitter<String> = new EventEmitter<String>();
  // calculate the width of div with class crop but the div width 86px remain unchanged
  // calculated width = length of current width divide by the count of star * rating
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }
  onStar(): void {
     this.ratingClicked.emit(`The rating clicked is >>>> ${this.rating}`);
  }

}
