import { Component, OnInit } from '@angular/core';
import { FormField } from 'ion-custom-form-builder';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {



  fields: FormField[] = [];

  constructor() {
    this.fields = [
      {
        type: 'number',
        title: 'Card Number',
        formControlName: 'card',
        formFieldType: 'credit-card',
        validators: [Validators.required],
        validationMessages: [
          {
            type: 'required',
            message: 'Card Number is required'
          }
        ]
      },
      {
        icon: 'person',
        type: 'text',
        title: 'Name',
        formControlName: 'name',
        placeholder: 'Name on card',
        validators: [Validators.required],
        validationMessages: [
          {
            type: 'required',
            message: 'Name is required'
          }
        ]
      },
      {
        icon: 'calendar',
        type: 'text',
        title: 'Expiry',
        formControlName: 'expiry',
        placeholder: '02/25',
        validators: [Validators.required],
        validationMessages: [
          {
            type: 'required',
            message: 'Expiration date is required'
          }
        ]
      },
      {
        icon: 'lock-closed',
        type: 'number',
        title: 'CVV',
        formControlName: 'cvv',
        validators: [Validators.required],
        validationMessages: [
          {
            type: 'required',
            message: 'CVV is required'
          }
        ]
      }
    ];
  }

  onIonCfbFormSubmission(formData) {
    console.log('FORM_DATA=,', formData);
  }


  ngOnInit() {
  }

}
