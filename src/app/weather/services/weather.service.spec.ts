import { WeatherService } from './weather.service';
import { of } from 'rxjs';
import { Weather } from 'src/app/shared/models/weather.model';

describe('WeatherService', () => {
  it('should return weather on "getWeather$"', () => {
    // Given
    const weather = new Weather('10 - 15');
    const api = jasmine.createSpyObj(['getWeather$']);
    api.getWeather$ = jasmine.createSpy().and.returnValue(of(null));
    const transform = jasmine.createSpyObj(['weatherResponseToWeather$']);
    transform.weatherResponseToWeather$ = jasmine.createSpy().and.returnValue(weather);
    const appConfiguration = jasmine.createSpyObj(['']);
    appConfiguration.communication = { gateway: 'gateway', apiKey: 'apiKey' };
    const service = new WeatherService(api, transform, appConfiguration);
    // When
    service.getWeather$('city').subscribe(response => {
      // Then
      expect(response).toEqual(weather);
    });
  });
});
