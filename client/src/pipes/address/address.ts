import { Pipe, PipeTransform } from '@angular/core';
import { GeocoderResult } from '@ionic-native/google-maps';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {

  public transform(value: GeocoderResult, ...args) {
    return `${value.country}, ${value.adminArea}, ${value.thoroughfare}, ${value.subThoroughfare}`;
  }
}
