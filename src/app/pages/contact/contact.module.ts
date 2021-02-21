import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { IonCustomFormBuilderModule } from 'ion-custom-form-builder';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    IonCustomFormBuilderModule.forRoot()
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
