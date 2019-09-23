import { of } from 'rxjs';
import { CityForecastComponent } from './city-forecast.component';

describe('CityForecastComponent', () => {
  it('should setup forecast on init', () => {
    // Given
    const forecast$ = of(null);
    const forecastService = jasmine.createSpyObj(['getForecast$']);
    forecastService.getForecast$ = jasmine.createSpy().and.returnValue(forecast$);
    const component = new CityForecastComponent(forecastService);
    component.city = { title: '', query: '', preview: '' };
    // When
    component.ngOnInit();
    // Then
    expect(component.forecast$).toBe(forecast$);
  });
});
