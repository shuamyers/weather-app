import {TestBed} from '@angular/core/testing';

import {WeatherService} from './weather.service';
import {resMock} from './weather.component.spec';
import {WeatherInfo} from './weather-info';
import {HttpClientModule} from '@angular/common/http';
import {of} from 'rxjs';

describe('WeatherService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WeatherService(httpClientSpy as any);
  });

  it('should return expected heroes (HttpClient called once)', () => {
    const expectedWeather: WeatherInfo = resMock;

    httpClientSpy.get.and.returnValue(of(resMock));

    service.getWeather(123, 'Fahrenheit').subscribe(
      weather => expect(weather).toEqual(expectedWeather, 'expected Weather info'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
