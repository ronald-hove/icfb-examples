import { Component, OnInit } from '@angular/core';
import { FormField } from 'ion-custom-form-builder';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  fields: FormField[] = [];

  constructor() {
    this.fields = [
      {
        type: 'text',
        title: 'Full Name',
        formControlName: 'name',
        validators: [Validators.required],
        validationMessages: [
          {
            type: 'required',
            message: 'Name is required'
          }
        ]
      },
      {
        type: 'number',
        title: 'Phone Number',
        formControlName: 'contact',
        validators: [Validators.required],
        validationMessages: [
          {
            type: 'required',
            message: 'Contact is required'
          }
        ]
      },
      {
        type: 'text',
        title: 'Message',
        formControlName: 'desc',
        formFieldType: 'ion-textarea',
        textAreaRowCount: 6,
        validators: [Validators.required],
        validationMessages: [
          {
            type: 'required',
            message: 'Message is required'
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
