import {AbstractControl} from '@angular/forms';
import {Units} from '../units.enum';


export function weatherUnits(control: AbstractControl) {
  if (!(control.value?.toLowerCase() === Units.Celsius ||
    control.value?.toLowerCase() === Units.Kelvin ||
    control.value?.toLowerCase() === Units.Fahrenheit ||
    control.value?.toLowerCase() === Units.Imperial ||
    control.value?.toLowerCase() === Units.Metric ||
    control.value?.toLowerCase() === Units.Standard)) {
    return {unitValid: true};
  }
  return null;
}
