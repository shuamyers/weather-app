import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {WeatherInfo} from './weather-info';

const apiKey = '0d7303c17ee3d3482cd82a2ad273a90d';
const url = 'https://api.openweathermap.org/data/2.5/weather?';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

    getWeather(id: number, unit: string): Observable<WeatherInfo> {
    const weatherUrl = `${url}id=${id}&appid=${apiKey}&units=${unit}`;
    return this.http.get(weatherUrl).pipe(map(res => new WeatherInfo(res as WeatherInfo, unit)));
  }
}
