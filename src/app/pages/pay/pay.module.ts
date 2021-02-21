import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayPageRoutingModule } from './pay-routing.module';

import { PayPage } from './pay.page';
import { IonCustomFormBuilderModule } from 'ion-custom-form-builder';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayPageRoutingModule,
    IonCustomFormBuilderModule.forRoot()
  ],
  declarations: [PayPage]
})
export class PayPageModule {}
