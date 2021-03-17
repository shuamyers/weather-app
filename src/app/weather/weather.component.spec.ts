import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherComponent} from './weather.component';
import {WeatherInfo} from './weather-info';

export const resMock = new WeatherInfo({
  coord: {lon: 36.3219, lat: 34.9401},
  weather: [{id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n'}],
  base: 'stations',
  main: {temp: 288.15, feels_like: 283.09, temp_min: 288.15, temp_max: 288.15, pressure: 1013, humidity: 58},
  visibility: 10000,
  wind: {speed: 6.17, deg: 210},
  clouds: {all: 40},
  dt: 1615930723,
  sys: {type: 1, id: 7613, country: 'SY', sunrise: 1615866246, sunset: 1615909362},
  timezone: 7200,
  id: 2960,
  name: '‘Ayn Ḩalāqīm',
  cod: 200
}, 'Fahrenheit');

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addWeatherInfo', () => {
    it('should add Weather Info to weatherInfoList', () => {
      component.addWeatherInfo(resMock, 1);
      expect(component.weatherInfoList.length).toBe(1);
    });
  });
});
