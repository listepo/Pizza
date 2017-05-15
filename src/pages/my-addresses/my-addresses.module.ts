import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAddressesPage } from './my-addresses';

@NgModule({
  declarations: [
    MyAddressesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAddressesPage),
  ],
  exports: [
    MyAddressesPage
  ]
})
export class MyAddressesPageModule {}
