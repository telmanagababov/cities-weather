import { of } from 'rxjs';
import { WeatherApiService } from './weather-api.service';

describe('WeatherApiService', () => {
  it('should call http on "getWeather$"', () => {
    // Given
    const httpClient = jasmine.createSpyObj(['get']);
    httpClient.get = jasmine.createSpy().and.returnValue(of(null));
    const appConfiguration = jasmine.createSpyObj(['']);
    appConfiguration.communication = { gateway: 'gateway', apiKey: 'apiKey' };
    const service = new WeatherApiService(httpClient, appConfiguration);
    const cityQuery = 'cityQuery';
    // When
    service.getWeather$(cityQuery).subscribe(() => {
      // Then
      expect(httpClient.get).toHaveBeenCalledWith('gateway/weather?APPID=apiKey&q=cityQuery&units=metric');
    });
  });
});
