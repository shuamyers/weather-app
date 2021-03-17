import {Component} from '@angular/core';
import {WeatherInfo} from './weather-info';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  weatherInfoList: WeatherInfo [] = [];
  dashboardFromsIndexs = [0];

  addWeatherInfo(weatherInfo: WeatherInfo, index: number): void {
    this.weatherInfoList.push(weatherInfo);
    this.dashboardFromsIndexs.push(index);
  }
}
