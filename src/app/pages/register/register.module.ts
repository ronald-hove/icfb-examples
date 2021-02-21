import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { IonCustomFormBuilderModule } from 'ion-custom-form-builder';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    IonCustomFormBuilderModule.forRoot()
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
