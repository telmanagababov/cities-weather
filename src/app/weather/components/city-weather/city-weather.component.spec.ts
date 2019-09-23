import { CityWeatherComponent } from './city-weather.component';
import { of } from 'rxjs';

describe('CityWeatherComponent', () => {
  it('should setup weather on init', () => {
    // Given
    const weather$ = of(null);
    const weatherService = jasmine.createSpyObj(['getWeather$']);
    weatherService.getWeather$ = jasmine.createSpy().and.returnValue(weather$);
    const component = new CityWeatherComponent(weatherService);
    component.city = { title: '', query: '', preview: '' };
    // When
    component.ngOnInit();
    // Then
    expect(component.weather$).toBe(weather$);
  });
});
