import { Component, OnInit } from '@angular/core';
import { FormField } from 'ion-custom-form-builder';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  fields: FormField[] = [];

  constructor() {
    this.fields = [
      {
        icon: 'mail',
        type: 'email',
        title: 'Email',
        formControlName: 'email',
        validators: [Validators.required, Validators.email],
        validationMessages: [
          {
            type: 'required',
            message: 'Email is required'
          },
          {
            type: 'email',
            message: 'Email is incorrect'
          }
        ]
      },
      {
        icon: 'lock-closed',
        type: 'password',
        title: 'Password',
        formControlName: 'password',
        validators: [Validators.required],
        validationMessages: [
          {
            type: 'required',
            message: 'Password is required'
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
