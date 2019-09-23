import { of } from 'rxjs';
import { ForecastApiService } from './forecast-api.service';

describe('ForecastApiService', () => {
  it('should call http on "getForecast$"', () => {
    // Given
    const httpClient = jasmine.createSpyObj(['get']);
    httpClient.get = jasmine.createSpy().and.returnValue(of(null));
    const appConfiguration = jasmine.createSpyObj(['']);
    appConfiguration.communication = { gateway: 'gateway', apiKey: 'apiKey' };
    const service = new ForecastApiService(httpClient, appConfiguration);
    const cityQuery = 'cityQuery';
    // When
    service.getForecast$(cityQuery).subscribe(() => {
      // Then
      expect(httpClient.get).toHaveBeenCalledWith('gateway/forecast?APPID=apiKey&q=cityQuery&units=metric');
    });
  });
});
