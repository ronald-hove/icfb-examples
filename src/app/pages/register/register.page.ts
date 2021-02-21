import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { FormField, IonCustomFormBuilderService } from 'ion-custom-form-builder';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  fields: FormField[] = [];

  ngOnInit() {
  }

  constructor(private ionCfbService: IonCustomFormBuilderService) {
    this.fields = [
      {
        icon: 'person',
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
        icon: 'mail',
        type: 'email',
        title: 'Email',
        formControlName: 'surname',
        validators: [Validators.required, Validators.email],
        validationMessages: [
          {
            type: 'required',
            message: 'Surname is required'
          },
          {
            type: 'email',
            message: 'Email is not valid'
          }
        ]
      },
      {
        icon: 'call',
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
        icon: 'lock-closed',
        type: 'password',
        title: 'Password',
        formControlName: 'password',
        validators: [Validators.required],
        asyncValidators: [this.passwordValidator],
        validationMessages: [
          {
            type: 'required',
            message: 'Password is required'
          },
          {
            type: 'passwordValidator',
            message: 'Passwords do not match'
          }
        ],
      },
      {
        icon: 'shield-checkmark',
        type: 'password',
        title: 'Confirm Password',
        formControlName: 'confirm-password',
        validators: [Validators.required],
        asyncValidators: [this.confirmPasswordValidator],
        validationMessages: [
          {
            type: 'required',
            message: 'Please confirm your password'
          },
          {
            type: 'confirmPasswordValidator',
            message: 'Passwords do not match'
          }
        ]
      }
    ];
  }

  onIonCfbFormSubmission(formData) {
    console.log('FORM_DATA=,', formData);
  }

    /**
   * Validates password against password confirmation
   *
   * @param {AbstractControl} control
   * @return {*}  {Promise<any>}
   */
  passwordValidator(control: AbstractControl): Promise<any> {
    if (!control.parent) {
      return Promise.resolve(null)
    }else if (control?.parent.get('confirm-password')?.value && control?.value !== control?.parent.get('confirm-password')?.value) {
      control.markAsTouched({ onlySelf: true });
      return Promise.resolve({ passwordValidator: { valid: false } });
    }else {
      if (control?.parent.get('confirm-password')?.invalid) {
        control?.parent.get('confirm-password')?.updateValueAndValidity({ onlySelf: true });
      }
      return Promise.resolve(null)
    }
  }


  /**
   * validates password confirmation against password
   *
   * @param {AbstractControl} control
   * @return {*}  {Promise<any>}
   */
  confirmPasswordValidator(control: AbstractControl): Promise<any> {
    if (!control.parent) {
      return Promise.resolve(null)
    }else if (control?.parent.get('password')?.value && control?.value !== control?.parent.get('password')?.value) {
      control?.parent.get('password')?.updateValueAndValidity({ onlySelf: true });
      return Promise.resolve({ confirmPasswordValidator: { valid: false } });
    }else {
      control?.parent.get('password')?.updateValueAndValidity({ onlySelf: true });
      return Promise.resolve(null)
    }
  }

  onClickMyOwnSubmitButton() {
    this.ionCfbService.triggerFormSubmission$.next(true)
  }

}
