import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {
 GoogleMaps,
} from '@ionic-native/google-maps';
import { RestaurantsPage } from './restaurants';

@NgModule({
  declarations: [
    RestaurantsPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantsPage),
  ],
  exports: [
    RestaurantsPage,
  ],
  providers: [
    GoogleMaps,
  ],
})
export class RestaurantsPageModule {}
