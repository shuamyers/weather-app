import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherComponent} from './weather.component';
import {WeatherService} from './weather.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { WeatherListComponent } from './weather-list/weather-list.component';


@NgModule({
  declarations: [WeatherComponent, WeatherFormComponent, WeatherListComponent],
  exports: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [WeatherService]
})
export class WeatherModule {
}
