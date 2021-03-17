import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WeatherService} from '../weather.service';
import {WeatherInfo} from '../weather-info';
import {weatherUnits} from './weather-units.validators';

const cityListMock = [{
  id: 2643743,
  name: 'London',
  state: '',
  country: 'GB',
  coord: {
    lon: -0.12574,
    lat: 51.50853
  }
},
  {
    id: 5128638,
    name: 'New York',
    state: 'NY',
    country: 'US',
    coord: {
      lon: -75.499901,
      lat: 43.000351
    }
  },
  {
    id: 293397,
    name: 'Tel Aviv',
    state: '',
    country: 'IL',
    coord: {
      lon: 34.780571,
      lat: 32.080879
    }
  },
  {
    id: 3117735,
    name: 'Madrid',
    state: '',
    country: 'ES',
    coord: {
      lon: -3.70256,
      lat: 40.4165
    }
  },
  {
    id: 5368361,
    name: 'Los Angeles',
    state: 'CA',
    country: 'US',
    coord: {
      lon: -118.243683,
      lat: 34.052231
    }
  },
  {
    id: 281184,
    name: 'Jerusalem',
    state: '',
    country: 'IL',
    coord: {
      lon: 35.216331,
      lat: 31.769039
    }
  },
];


@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {
  @Output() weatherInfo = new EventEmitter();
  form!: FormGroup;
  weatherData!: WeatherInfo;
  isSubmitted = false;
  options: any [] = cityListMock;

  constructor(private fb: FormBuilder,
              private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      cityId: [null, [Validators.required]],
      units: [null, [Validators.required, weatherUnits]]
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.form.valid) {
      const cityId = this.form.get('cityId')?.value;
      const units = this.form.get('units')?.value ?? 'standard';
      this.weatherService.getWeather(cityId, units).subscribe(
        (data: WeatherInfo) => {
          this.weatherData = data;
          this.weatherInfo.emit(data);
        }
      );
    }
  }
}
