import { ForecastService } from './forecast.service';
import { of } from 'rxjs';
import { Forecast } from '../models/forecast.model';

describe('ForecastService', () => {
  it('should return forecast on "getForecast$"', () => {
    // Given
    const forecast = new Forecast([]);
    const api = jasmine.createSpyObj(['getForecast$']);
    api.getForecast$ = jasmine.createSpy().and.returnValue(of(null));
    const transform = jasmine.createSpyObj(['forecastResponseToForecast$']);
    transform.forecastResponseToForecast$ = jasmine.createSpy().and.returnValue(forecast);
    const appConfiguration = jasmine.createSpyObj(['']);
    appConfiguration.communication = { gateway: 'gateway', apiKey: 'apiKey' };
    const service = new ForecastService(api, transform, appConfiguration);
    // When
    service.getForecast$('city').subscribe(response => {
      // Then
      expect(response).toEqual(forecast);
    });
  });
});
