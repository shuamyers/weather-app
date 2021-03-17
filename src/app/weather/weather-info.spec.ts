import {createMetricSymbol, WeatherInfo} from './weather-info';
import {resMock} from './weather.component.spec';
import {Units} from './units.enum';

describe('WeatherInfo', () => {
  it('should create an instance of WeatherInfo', () => {
    expect(new WeatherInfo(resMock, 'Fahrenheit')).toBeTruthy();
  });
  it('should create add tempSymbol to WeatherInfo', () => {
    const weatherInfo = new WeatherInfo(resMock, 'Fahrenheit');
    expect(weatherInfo.tempSymbol).toBe('+');
  });

  describe('createMetricSymbol', () => {
    it('should Standard unit return Symbol K ', () => {
     const unitSymbol = createMetricSymbol(Units.Standard);
     expect(unitSymbol).toBe('K');
    });
    it('should Kelvin unit return Symbol K ', () => {
      const unitSymbol = createMetricSymbol(Units.Kelvin);
      expect(unitSymbol).toBe('K');
    });
    it('should Metric unit return Symbol C ', () => {
      const unitSymbol = createMetricSymbol(Units.Metric);
      expect(unitSymbol).toBe('C');
    });
    it('should Celsius unit return Symbol C ', () => {
      const unitSymbol = createMetricSymbol(Units.Celsius);
      expect(unitSymbol).toBe('C');
    });
    it('should Fahrenheit unit return Symbol F ', () => {
      const unitSymbol = createMetricSymbol(Units.Fahrenheit);
      expect(unitSymbol).toBe('F');
    });
    it('should Imperial unit return Symbol K ', () => {
      const unitSymbol = createMetricSymbol(Units.Imperial);
      expect(unitSymbol).toBe('F');
    });
    it('should default unit return Symbol Unknown unit ', () => {
      const unitSymbol = createMetricSymbol('s');
      expect(unitSymbol).toBe('Unknown unit');
    });
  });
});
