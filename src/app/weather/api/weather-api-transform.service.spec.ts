import { WeatherApiTransformService } from './weather-api-transform.service';

describe('WeatherApiTransformService', () => {
  it('should transform data on "weatherResponseToWeather$"', () => {
    // Given
    const service = new WeatherApiTransformService();
    const response = {
      main: { temp: 22, temp_min: 18.78, temp_max: 22, humidity: 0, pressure: 0 },
      weather: [{ main: 'Clear', description: 'clear sky' }],
      wind: { speed: 3.63, deg: 0 },
      clouds: { all: 0 }
    };
    // When
    const data = service.weatherResponseToWeather$(response);
    // Then
    expect(data.weather).toEqual('18.78 - 22');
    expect(data.description).toEqual('Clear');
  });
});
