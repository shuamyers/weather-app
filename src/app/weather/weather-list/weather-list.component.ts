import {Component, Input, OnInit} from '@angular/core';
import {WeatherInfo} from '../weather-info';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent  {
  @Input() weatherInfoList!: WeatherInfo[];
}
