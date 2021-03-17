import {Units} from './units.enum';

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export class WeatherInfo {
  coord!: Coord;
  weather!: Weather[];
  base!: string;
  main!: Main;
  visibility!: number;
  wind!: Wind;
  clouds!: Clouds;
  dt!: number;
  sys!: Sys;
  timezone!: number;
  id!: number;
  name!: string;
  cod!: number;
  unit?: string;
  unitSymbol?: string;
  tempSymbol?: string;

  constructor(data: WeatherInfo, unit: string) {
    Object.assign(this, data);
    if (unit === 'standard') {
      unit = 'Kelvin';
    }
    this.unit = unit;
    this.unitSymbol = createMetricSymbol(unit);
    this.tempSymbol = data.main.temp > 0 ? '+' : '';
  }
}


export const createMetricSymbol = (unit: string): string => {
  switch (unit.toLowerCase()) {
    case Units.Metric:
      return 'C';
    case Units.Celsius:
      return 'C';
    case Units.Imperial:
      return 'F';
    case Units.Fahrenheit:
      return 'F';
    case Units.Standard:
      return 'K';
    case Units.Kelvin:
      return 'K';
    default:
      return 'Unknown unit';
  }
};






