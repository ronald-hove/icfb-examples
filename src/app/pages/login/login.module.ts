import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { IonCustomFormBuilderModule } from 'ion-custom-form-builder';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    IonCustomFormBuilderModule.forRoot()
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
