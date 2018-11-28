import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  languages = ['NodeJs' , 'AngularJs' , 'ReactJs'];
  employee = new Employee('Cedric', 'Leumaleu', 'Male',true,'NodeJs');
  constructor() { }

  changeFisrtLetterToUpperCase(value: string): void {
    if (value.trim().length > 0) { // Hello Aakash for the task i used trim function
      this.employee.firstName = value.trim().charAt(0).toUpperCase() + value.trim().slice(1);
    } else {
      this.employee.firstName = value;
    }
  }
  ngOnInit() {
  }

}
