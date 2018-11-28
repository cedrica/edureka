import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component ({
  selector: 'app-form"',
  templateUrl: './create.component.html'
})


export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    // Using Form builder
    this.productForm = this.fb.group({

    });
    // Witout use formbuuilder
    /* this.customerForm = new FormGroup({
        firstName = new FormControl();
        lastName = new FormControl();
    });
  } */

  /* populateData(): void {
   // use to set all value of the form
   this.productForm.setValue({
   });

   // use to set just some values of the form
  this.customerForm.patchValue({
        firstName:"John",
        lastName: "Semeur"
    });*/
  }
}
