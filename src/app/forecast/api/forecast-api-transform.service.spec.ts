import { ForecastApiTransformService } from './forecast-api-transform.service';

describe('ForecastApiTransformService', () => {
  it('should transform data on "forecastResponseToForecast$"', () => {
    // Given
    const service = new ForecastApiTransformService();
    const response = { list: [{
      dt_txt: '2019-09-23 09:00:00',
      main: { temp: 22, temp_min: 18.78, temp_max: 22 },
      weather: [{ main: '15.5', description: 'Clear' }],
      wind: { speed: 3.63 }
    }]};
    // When
    const data = service.forecastResponseToForecast$(response);
    // Then
    expect(data.items[0].time).toEqual('9 AM');
    expect(data.items[0].weather.weather).toEqual('18.78 - 22');
  });
});
