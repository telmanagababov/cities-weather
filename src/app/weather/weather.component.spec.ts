import { WeatherComponent } from './weather.component';
import { Router } from '@angular/router';
import { AppConfiguration } from '../shared/models/app-configuration.model';
import { routes } from '../shared/configs/routes.config';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let router: Router;
  let appConfiguration: AppConfiguration;

  beforeEach(initMocks);

  it('should set cities on init', () => {
    // Given
    appConfiguration.cities = [{ title: 'London', preview: 'london', query: 'london' }];
    // When
    component.ngOnInit();
    // Then
    expect(component.cities).toBe(appConfiguration.cities);
  });

  it('should navigate to forecast on "showForecast"', () => {
    // Given
    const city = { title: 'London', preview: 'london', query: 'london' };
    appConfiguration.cities = [city];
    component.ngOnInit();
    // When
    component.showForecast(appConfiguration.cities[0]);
    // Then
    expect(router.navigate).toHaveBeenCalledWith([routes.FORECAST.link, city.title]);
  });

  function initMocks() {
    router = jasmine.createSpyObj(['navigate']);
    appConfiguration = jasmine.createSpyObj(['']);
    appConfiguration.communication = { gateway: 'gateway', apiKey: 'apiKey', updateTimeout: 0 };
    component = new WeatherComponent(router, appConfiguration);
  }
});
